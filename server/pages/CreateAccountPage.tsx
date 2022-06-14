import React, { ReactNode } from "react"
import { AuthEmail, UserRole, Form, PageId, Link, SubmitForm, Auth, EmailService, RapDvApp, Input, FlashType, Request } from "rapdv-lib"
import { NextFunction, Response } from "express"
import { check } from "express-validator"

export class CreateAccountPage {
  public static render = async (req: Request): Promise<ReactNode> => {
    return (
      <div>
        <PageId>create-account</PageId>
        <SubmitForm title="Create account" submitText="Create account" style={{ minWidth: "300px" }}>
          <Input type="email" name="email" req={req} required />
          <Input type="password" minLength={8} name="password" required />
          <Input type="password" name="confirmPassword" data-equal-to="password" required />
        </SubmitForm>
        <div>
          <Link href="/log-in">Log in</Link>
          <Link href="/forgot-password">I forgot password</Link>
        </div>
      </div>
    )
  }

  public static register = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, emailService: EmailService): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, CreateAccountPage.render(req))

    if (!success) {
      return CreateAccountPage.render(req)
    }

    try {
      const email = form.inputs["email"].value
      const password = form.inputs["password"].value
      await AuthEmail.createAccount(req, email, password, "", "", UserRole.User, emailService)
    } catch (error) {
      req.flash(FlashType.Errors, error)
      return CreateAccountPage.render(req)
    }

    req.flash(FlashType.Success, "Your account has been created.")
    res.redirect("/")
  }

  public static verifyEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
    app: RapDvApp,
    emailService: EmailService
  ): Promise<ReactNode> => {
    await check("token").notEmpty().run(req)
    const redirectTo = !!req.user ? "/" : "/log-in"
    if (!Auth.areParamsValid(req, res, redirectTo)) return

    const token = req.params["token"]

    try {
      await AuthEmail.verifyEmail(req, token)
    } catch (error) {
      req.flash(FlashType.Errors, error.message)
      res.redirect(redirectTo)
      return
    }

    req.flash(FlashType.Success, "Your email is verified.")
    res.redirect(redirectTo)
  }
}
