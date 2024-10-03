import React, { ReactNode } from "react"
import { NextFunction, Response } from "express"
import { check } from "express-validator"
import { SubmitForm } from "../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../submodules/rapdv/server/ui/Input"
import { Form } from "../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../submodules/rapdv/server/server/Request"
import { AuthEmail } from "../../submodules/rapdv/server/auth/AuthEmail"
import { Auth } from "../../submodules/rapdv/server/auth/Auth"
import { RapDvApp } from "../../submodules/rapdv/server/RapDvApp"
import { UserRole } from "../../submodules/rapdv/server/database/CollectionUser"
import { Link } from "../../submodules/rapdv/server/ui/Link"
import { PageId } from "../../submodules/rapdv/server/pages/PageId"
import { Mailer } from "../../submodules/rapdv/server/mailer/Mailer"

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

  public static register = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, mailer: Mailer): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, CreateAccountPage.render(req))

    if (!success) {
      return CreateAccountPage.render(req)
    }

    try {
      const email = form.inputs["email"].value
      const password = form.inputs["password"].value
      const appBasicInfo = app.getBasicInfo()

      await AuthEmail.createAccount(req, email, password, "", "", UserRole.User, appBasicInfo, mailer)
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
    mailer: Mailer
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
