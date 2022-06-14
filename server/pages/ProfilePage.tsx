import React, { ReactNode } from "react"
import styled from "styled-components"
import { Images, Form, FlashType, Request, Input, Link, SubmitForm } from "rapdv-lib"

export class ProfilePage {
  public static render = async (req: Request): Promise<ReactNode> => {
    const user = req.user
    const photoUrl = await user.getPhotoSrc()
    return (
      <div>
        <SubmitForm title="Profile" submitText="Save">
          <div className="row">
            <div className="col">
              <Photo src={photoUrl} />
              <Input type="file" accept="image/*" name="photo" />
            </div>
            <div className="col">
              <Input type="email" name="email" value={user.email} readOnly />
              <Input type="text" name="firstName" value={user.firstName} required />
              <Input type="text" name="lastName" value={user.lastName} required />
            </div>
          </div>
        </SubmitForm>
        <div>
          <Link href="/change-password">Change password</Link>
        </div>
      </div>
    )
  }

  public static edit = async (req: Request): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, ProfilePage.render(req))

    if (!success) {
      return ProfilePage.render(req)
    }

    try {
      const firstName = form.inputs["firstName"].value
      const lastName = form.inputs["lastName"].value

      req.user.firstName = firstName
      req.user.lastName = lastName

      const photoFile = req.files?.find((entry) => entry.fieldname === "photo")
      if (!!photoFile) {
        const image = await Images.savePhoto(photoFile, 200, true)
        req.user.photoId = image._id
      }

      await req.user.save()

      req.flash(FlashType.Success, "Success! Your profile is updated.")
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    return ProfilePage.render(req)
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
