import { NextFunction, Response } from "express"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { SubmitForm } from "../../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../../submodules/rapdv/server/ui/Input"
import { Form } from "../../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../../submodules/rapdv/server/server/Request"
import { RapDvApp } from "../../../submodules/rapdv/server/RapDvApp"
import { CollectionUser, UserRole, UserStatus } from "../../../submodules/rapdv/server/database/CollectionUser"
import { Link } from "../../../submodules/rapdv/server/ui/Link"
import { Collection } from "../../../submodules/rapdv/server/database/Collection"
import { Paginator } from "../../../submodules/rapdv/server/ui/Paginator"
import { List } from "../../../submodules/rapdv/server/ui/List"
import { Select } from "../../../submodules/rapdv/server/ui/Select"
import { Images } from "../../../submodules/rapdv/server/files/Images"
import { FileStorageType } from "../../../submodules/rapdv/server/database/CollectionFile"

export class UsersPage {
  public static renderUsersList = async (req: Request): Promise<ReactNode> => {
    const collectionUsers = Collection.get("User")
    const count = await collectionUsers.count()
    const from = Paginator.getFromPosition(req, count)
    const users = await collectionUsers.findAll(undefined, from, Paginator.ITEMS_PER_PAGE)

    return (
      <div className="users-page">
        <h1 className="users-page-title">Users</h1>
        {!users && <p className="users-empty">No users found.</p>}
        {!!users && (
          <div className="users-table-wrap">
            <List
              fields={[
                { key: "firstName" },
                { key: "lastName" },
                { key: "email", custom: (entry) => <>{entry.email}</> },
                { key: "edit", title: "", custom: (entry) => <a className="users-edit-link" href={`/user/${entry.email}`}>Edit</a> }
              ]}
              data={users}
              className="users-table"
            />
          </div>
        )}
        <Paginator req={req} itemsCount={count} />
      </div>
    )
  }

  public static renderUser = async (req: Request, res: Response, next: NextFunction, app: RapDvApp): Promise<ReactNode> => {
    const { isNew, entry } = await Form.editEntry(req.params.email, "User", { email: req.params.email })
    if (isNew && !entry) {
      return <div>This user doesn't exist.</div>
    }
    const photoUrl = await entry.getPhotoSrc()
    const statuses = Object.keys(UserStatus).map((key) => UserStatus[key])
    const allRoles = [...Object.values(UserRole), ...app.getRoles()]

    const allAdmins = await CollectionUser.findAllValidAdmins()
    const areMultipleAdmins = allAdmins.length > 1
    const isUserAdmin = entry.isAdmin()

    return (
      <div className="profile-card">
        <h1 className="profile-title">Edit User</h1>
        <SubmitForm title="" submitText="Save changes" submitBtnClass="btn-primary">
          <div className="profile-layout">
            <div className="profile-photo-col">
              <div className="profile-photo-wrap">
                <Photo src={photoUrl} className="profile-photo" />
              </div>
              <p className="profile-photo-hint">Upload a new photo</p>
              <Input type="file" accept="image/*" name="photo" />
            </div>
            <div className="profile-fields-col">
              <Input type="email" name="email" value={entry.email} readOnly />
              <Input type="text" name="firstName" value={entry.firstName} required />
              <Input type="text" name="lastName" value={entry.lastName} required />
              <Select name="role" value={entry?.role} options={allRoles} required disabled={!areMultipleAdmins && isUserAdmin} />
              <Select name="status" value={entry?.status} options={statuses} required disabled={!areMultipleAdmins && isUserAdmin} />
            </div>
          </div>
        </SubmitForm>
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
        const image = await Images.savePhoto(photoFile, FileStorageType.Database)
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  user-select: none;
  user-drag: none;
  border: 3px solid #e4e7ec;
  background: #f3f4f6;
`
