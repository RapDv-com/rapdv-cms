import React, { ReactNode } from "react"
import { AuthEmail, Form, FlashType, Request, Input, SubmitForm } from "rapdv-lib"

export class ChangePasswordPage {
  public static render = async (): Promise<ReactNode> => {
    return (
      <div>
        <SubmitForm title="Change password" submitText="Change">
          <Input type="password" minLength={8} name="password" required />
          <Input type="password" name="confirmPassword" data-equal-to="password" required />
        </SubmitForm>
      </div>
    )
  }

  public static changePassword = async (req: Request): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, ChangePasswordPage.render())

    if (!success) {
      return ChangePasswordPage.render()
    }

    try {
      const password = form.inputs["password"].value
      await AuthEmail.changePassword(req, password)
      req.flash(FlashType.Success, "Success! Your password has been changed.")
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    return ChangePasswordPage.render()
  }
}
