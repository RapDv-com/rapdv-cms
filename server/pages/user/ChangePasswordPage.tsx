import React, { ReactNode } from "react"
import { SubmitForm } from "../../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../../submodules/rapdv/server/ui/Input"
import { Form } from "../../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../../submodules/rapdv/server/server/Request"
import { AuthEmail } from "../../../submodules/rapdv/server/auth/AuthEmail"

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
