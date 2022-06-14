import { NextFunction, Response } from "express"
import React, { ReactNode } from "react"
import styled from "styled-components"
import {
  Collection,
  RapDvApp,
  Input,
  Link,
  List,
  Select,
  Paginator,
  SubmitForm,
  FlashType,
  Request,
  CollectionUser,
  UserRole,
  UserStatus,
  Images,
  Form
} from "rapdv-lib"

export class UsersPage {
  public static renderUsersList = async (req: Request): Promise<ReactNode> => {
    const collectionUsers = Collection.get("User")
    const count = await collectionUsers.countAll(undefined)
    const from = Paginator.getFromPosition(req, count)
    const users = await collectionUsers.findAll(undefined, from, Paginator.ITEMS_PER_PAGE)

    return (
      <>
        <h1>Users list</h1>
        {!users && <div>There are no users</div>}
        {!!users && (
          <List
            fields={[
              { key: "firstName" },
              { key: "lastName" },
              { key: "email" },
              { key: "edit", custom: (entry) => <a href={`/user/${entry.email}`}>Edit</a> }
            ]}
            data={users}
          />
        )}
        <Paginator req={req} itemsCount={count} />
      </>
    )
  }

  public static renderUser = async (req: Request, res: Response, next: NextFunction, app: RapDvApp): Promise<ReactNode> => {
    const { isNew, entry } = await Form.editEntry(req.params.email, "User", { email: req.params.email })
    if (isNew && !entry) {
      return <div>This user doesn't exist.</div>
    }
    const photoUrl = await entry.getPhotoSrc()
    const statuses = Object.keys(UserStatus).map((key) => UserStatus[key])
    const allRoles = [...Object.values(UserRole), ...app.setRoles()]

    const allAdmins = await CollectionUser.findAllValidAdmins()
    const areMultipleAdmins = allAdmins.length > 1
    const isUserAdmin = entry.isAdmin()

    return (
      <div>
        <SubmitForm title="Profile" submitText="Save">
          <div className="row">
            <div className="col-md">
              <Photo src={photoUrl} />
              <Input type="file" accept="image/*" name="photo" />
            </div>
            <div className="col-md">
              <Input type="email" name="email" value={entry.email} readOnly />
              <Input type="text" name="firstName" value={entry.firstName} required />
              <Input type="text" name="lastName" value={entry.lastName} required />
              <Select name="role" value={entry?.role} options={allRoles} required disabled={!areMultipleAdmins && isUserAdmin} />
              <Select name="status" value={entry?.status} options={statuses} required disabled={!areMultipleAdmins && isUserAdmin} />
            </div>
          </div>
        </SubmitForm>
        <div>
          <Link href="/change-password">Change password</Link>
        </div>
      </div>
    )
  }

  public static updateUser = async (req: Request, res: Response, next: NextFunction, app: RapDvApp): Promise<ReactNode> => {
    const { isNew, entry } = await Form.editEntry(req.params.email, "User", { email: req.params.email })
    if (isNew && !entry) {
      return <div>This user doesn't exist.</div>
    }

    const { success, form } = await Form.getParams(req, UsersPage.renderUser(req, res, next, app))
    if (!success) {
      return UsersPage.renderUser(req, res, next, app)
    }

    try {
      entry.firstName = form.inputs["firstName"].value
      entry.lastName = form.inputs["lastName"].value

      // Prevent removing last admin
      const allAdmins = await CollectionUser.findAllValidAdmins()
      const areMultipleAdmins = allAdmins.length > 1
      const isUserAdmin = entry.isAdmin()

      if (areMultipleAdmins || !isUserAdmin) {
        entry.role = form.inputs["role"].value
        entry.status = form.inputs["status"].value
      }

      const photoFile = req.files?.find((entry) => entry.fieldname === "photo")
      if (!!photoFile) {
        const image = await Images.savePhoto(photoFile, 200, true)
        entry.photoId = image._id
      }

      await entry.save()

      req.flash(FlashType.Success, "Success! Your profile is updated.")
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    return UsersPage.renderUser(req, res, next, app)
  }
}

const Photo = styled.img`
  width: 200px;
  height: 205px;
  margin-bottom: 1rem;
  object-fit: contain;
  user-select: none;
  user-drag: none;
`
