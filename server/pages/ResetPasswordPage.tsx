import React, { ReactNode } from "react"
import { Input, RapDvApp, SubmitForm, Form, Link, FlashType, Request, EmailService, AuthEmail } from "rapdv-lib"
import { NextFunction, Response } from "express"

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

  public static remind = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, emailService: EmailService): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, ResetPasswordPage.renderForgot(req))

    if (!success) {
      return ResetPasswordPage.renderForgot(req)
    }

    try {
      const email = form.inputs["email"].value
      const user = await AuthEmail.remindPassword(email, emailService)
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

  public static reset = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, emailService: EmailService): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, ResetPasswordPage.renderReset())

    if (!success) {
      return ResetPasswordPage.renderReset()
    }

    try {
      const token = req.params.token
      const password = form.inputs["password"].value
      await AuthEmail.resetPassword(req, password, token, emailService)
      req.flash(FlashType.Success, "Success! Your password has been changed.")
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    res.redirect("/log-in")
  }
}
