import React, { ReactNode } from "react"
import { NextFunction, Response } from "express"
import { SubmitForm } from "../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../submodules/rapdv/server/ui/Input"
import { Form } from "../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../submodules/rapdv/server/server/Request"
import { Link } from "../../submodules/rapdv/server/ui/Link"
import { PageId } from "../../submodules/rapdv/server/pages/PageId"
import { Auth } from "../../submodules/rapdv/server/auth/Auth"
import { AuthEmailCodes } from "../../submodules/rapdv/server/auth/AuthEmailCodes"
import { RapDvApp } from "../../submodules/rapdv/server/RapDvApp"
import { Mailer } from "../../submodules/rapdv/server/mailer/Mailer"
import { CollectionUser, UserRole } from "../../submodules/rapdv/server/database/CollectionUser"
import passport from "passport"
import { CloudflareTurnstileServer } from "../../submodules/rapdv/server/cloudflare/turnslide/CloudflareTurnstileServer"
import { TextUtils } from "../../submodules/rapdv/server/text/TextUtils"

export class LogInPage {
  public static render = async (req: Request): Promise<ReactNode> => {
    return (
      <>
        <div className="login-card">
          <PageId>login</PageId>
          <h1 className="login-title">Welcome</h1>
          <p className="login-subtitle">No account needed. Just enter your email to get started.</p>
          <SubmitForm title="" submitBtnClass="btn-primary w-100" submitBtnIcon="bi-arrow-right" submitText="Continue">
            <Input type="email" name="email" req={req} required />
            <div id="cloudFlareTurnslide" className="mb-3" style={{ overflow: "hidden" }}></div>
          </SubmitForm>
          <div className="login-divider"><span>or</span></div>
          <Link href="/log-in/google" icon="bi-google" className="btn btn-outline-secondary w-100 noPjax">
            Continue with Google
          </Link>
          <p className="login-terms">
            By logging in, you accept our{" "}
            <a href="/terms" target="_blank">terms and conditions</a>{" "}
            and{" "}
            <a href="/privacy" target="_blank">privacy policy</a>.
          </p>
        </div>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" async defer></script>
      </>
    )
  }

  public static login = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, mailer: Mailer): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, LogInPage.render(req))

    if (!success) {
      return LogInPage.render(req)
    }

    const email = form.inputs["email"]?.value
    try {

      if (!TextUtils.isEmpty(process.env.CLOUDFLARE_TURNSLIDE_KEY_SERVER)) {
        const isHuman = await CloudflareTurnstileServer.isRequestValidated(req)
        if (!isHuman) {
          req.flash(FlashType.Errors, "Please verify that you are not a robot 🤖")
          return LogInPage.render(req)
        }
      }

      // Create user
      const user = await AuthEmailCodes.initLogIn(req, email, app.getBasicInfo(), mailer, "", "", UserRole.User)

      res.redirect(`/verify-email/${email}`)
    } catch (error) {
      req.flash(FlashType.Errors, error)
      return LogInPage.render(req)
    }
  }

  public static logout = async (req: Request, res: Response): Promise<void> => {
    await Auth.logout(req)
    req.flash(FlashType.Success, "Can't wait to see you again! 👋")
    res.redirect("/log-in")
  }

  public static loginWithGoogle = async (req: Request, res: Response, next: NextFunction, app: RapDvApp, mailer: Mailer): Promise<ReactNode> => {
    await new Promise((resolve, reject) => {
      passport.authenticate("google", { scope: ["email", "profile"] })(req, res, resolve)
    })
    return null
  }

  public static loginWithGoogleCallback = async (
    req: Request,
    res: Response,
    next: NextFunction,
    app: RapDvApp,
    mailer: Mailer
  ): Promise<ReactNode> => {
    await new Promise<void>((resolve, reject) => {
      passport.authenticate("google", { failureRedirect: "/log-in" })(req, res, async () => {
        let redirectTo = "/"

        if (req?.user?._id) {
          const user = !!req?.user ? await CollectionUser.findUserById(req.user._id) : undefined
          redirectTo = await LogInPage.getUrlOnSuccessfulLogin(user)
          req.flash(FlashType.Success, "Welcome! It's great to see you!")
        }

        res.redirect(redirectTo)
        resolve()
      })
    })
    return null
  }

  public static getUrlOnSuccessfulLogin = async (user) => {
    let redirectTo = "/"
    if (!user) {
      return redirectTo
    }

    const isAdmin = user?.role === UserRole.Admin
    if (isAdmin) {
      redirectTo = "/users"
    } else if (user?.role === UserRole.User) {
      redirectTo = "/"
    }

    return redirectTo
  }
}
