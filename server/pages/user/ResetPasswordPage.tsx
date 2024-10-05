import React, { ReactNode } from "react"
import { NextFunction, Response } from "express"
import { SubmitForm } from "../../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../../submodules/rapdv/server/ui/Input"
import { Form } from "../../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../../submodules/rapdv/server/server/Request"
import { AuthEmail } from "../../../submodules/rapdv/server/auth/AuthEmail"
import { RapDvApp } from "../../../submodules/rapdv/server/RapDvApp"
import { Link } from "../../../submodules/rapdv/server/ui/Link"
import { Mailer } from "../../../submodules/rapdv/server/mailer/Mailer"

export class ResetPasswordPage {
  public static renderForgot = async (req: Request): Promise<ReactNode> => {
    return (
      <div>
        <SubmitForm title="I forgot my password" submitText="Reset password">
          <Input type="email" name="email" req={req} required />
        </SubmitForm>
        <div>
          <Link href="/log-in">Log In</Link>
          <Link href="/create-account">Create Account</Link>
        </div>
      </div>
    )
  }

  public static remind = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, mailer: Mailer): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, ResetPasswordPage.renderForgot(req))

    if (!success) {
      return ResetPasswordPage.renderForgot(req)
    }

    try {
      const email = form.inputs["email"].value
      const appBasicInfo = app.getBasicInfo()
      const user = await AuthEmail.remindPassword(email, appBasicInfo, mailer)
      req.flash(FlashType.Success, `An e-mail has been sent to ${user.email} with further instructions.`)
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    res.redirect("/log-in")
  }

  public static renderReset = async (): Promise<ReactNode> => {
    return (
      <div>
        <SubmitForm title="Reset password" submitText="Reset password">
          <Input type="password" minLength={8} name="password" required />
          <Input type="password" name="confirmPassword" data-equal-to="password" required />
        </SubmitForm>
        <div>
          <Link href="/log-in">Log In</Link>
          <Link href="/create-account">Create Account</Link>
        </div>
      </div>
    )
  }

  public static reset = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, mailer: Mailer): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, ResetPasswordPage.renderReset())

    if (!success) {
      return ResetPasswordPage.renderReset()
    }

    try {
      const token = req.params.token
      const password = form.inputs["password"].value
      const appBasicInfo = app.getBasicInfo()
      await AuthEmail.resetPassword(req, password, token, appBasicInfo, mailer)
      req.flash(FlashType.Success, "Success! Your password has been changed.")
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    res.redirect("/log-in")
  }
}
