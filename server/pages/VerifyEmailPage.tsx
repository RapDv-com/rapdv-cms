import React, { ReactNode } from "react"
import { NextFunction, Response } from "express"
import { check } from "express-validator"
import { FlashType, Request } from "../../submodules/rapdv/server/server/Request"
import { SubmitForm } from "../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../submodules/rapdv/server/ui/Input"
import { Form } from "../../submodules/rapdv/server/form/Form"
import { Collection } from "../../submodules/rapdv/server/database/Collection"
import { CollectionUser } from "../../submodules/rapdv/server/database/CollectionUser"
import { RapDvApp } from "../../submodules/rapdv/server/RapDvApp"
import { Auth } from "../../submodules/rapdv/server/auth/Auth"
import { Mailer } from "../../submodules/rapdv/server/mailer/Mailer"
import { AuthEmailCodes } from "../../submodules/rapdv/server/auth/AuthEmailCodes"
import { LogInPage } from "./LogInPage"

export class VerifyEmailPage {
  public static render = async (req: Request, res: Response): Promise<ReactNode> => {
    await check("email").notEmpty().run(req)

    if (!Auth.areParamsValid(req, res, "/log-in")) return

    const email = req.params["email"]
    const code = req.params["code"] ?? ""

    if (code && code.trim().length > 0) {
      return VerifyEmailPage.verifyEmailCode(req, res, email, code)
    }

    return (
      <div className="login-card">
        <h1 className="login-title">Check your email</h1>
        <p className="login-subtitle">We sent a verification code to:<br/> <strong>{email}</strong>. 
        <br/><br/>
          Enter it below to log in.
        </p>
        <SubmitForm title="" submitBtnClass="btn-primary w-100" submitBtnIcon="bi-arrow-right" submitText="Log In">
          <Input type="text" name="code" required />
        </SubmitForm>
        <p className="verify-email-hint">Didn't receive it? Check your spam folder.</p>
      </div>
    )
  }

  public static verifyEmail = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, mailer: Mailer): Promise<ReactNode> => {
    await check("email").notEmpty().run(req)

    const { success, form } = await Form.getParams(req, VerifyEmailPage.render(req, res))

    if (!success) {
      return VerifyEmailPage.render(req, res)
    }

    if (!Auth.areParamsValid(req, res, "/log-in")) return

    const code = form.inputs["code"]?.value
    const email = req.params["email"]

    return VerifyEmailPage.verifyEmailCode(req, res, email, code)
  }

  public static verifyEmailCode = async (req: Request, res: Response, email: string, code: string): Promise<ReactNode> => {
    let redirectTo = "/"

    try {
      const collectionUser = Collection.get("User") as CollectionUser
      const user = await collectionUser.findOne({ email })

      redirectTo = await LogInPage.getUrlOnSuccessfulLogin(user)

      await AuthEmailCodes.verifyEmail(req, email, code)
    } catch (error) {
      req.flash(FlashType.Errors, error.message ?? error)
      res.redirect(`/verify-email/${email}`)
      return
    }

    req.flash(FlashType.Success, "Welcome!")
    res.redirect(redirectTo)
  }
}
