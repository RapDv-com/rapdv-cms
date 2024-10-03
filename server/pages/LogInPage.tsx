import React, { ReactNode } from "react"
import { NextFunction, Response } from "express"
import { SubmitForm } from "../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../submodules/rapdv/server/ui/Input"
import { Form } from "../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../submodules/rapdv/server/server/Request"
import { AuthEmail } from "../../submodules/rapdv/server/auth/AuthEmail"
import { Link } from "../../submodules/rapdv/server/ui/Link"
import { PageId } from "../../submodules/rapdv/server/pages/PageId"
import { Auth } from "../../submodules/rapdv/server/auth/Auth"

export class LogInPage {
  public static render = async (req: Request): Promise<ReactNode> => {
    return (
      <div>
        <PageId>login</PageId>
        <SubmitForm title="Log in" submitText="Log in">
          <Input type="email" name="email" req={req} required />
          <Input type="password" name="password" required />
        </SubmitForm>
        <div>
          <Link href="/create-account">Create Account</Link>
          <Link href="/forgot-password">I forgot password</Link>
        </div>
      </div>
    )
  }

  public static login = async (req: Request, res: Response, next: NextFunction): Promise<ReactNode> => {
    const { success } = await Form.getParams(req, LogInPage.render(req))

    if (!success) {
      return LogInPage.render(req)
    }

    try {
      await AuthEmail.loginWithEmail(req, res, next)
    } catch (error) {
      req.flash(FlashType.Errors, error)
      return LogInPage.render(req)
    }

    req.flash(FlashType.Success, "You are logged in")
    res.redirect("/")
  }

  public static logout = async (req: Request, res: Response): Promise<void> => {
    await Auth.logout(req)
    req.flash(FlashType.Success, "You are logged out.")
    res.redirect("/log-in")
  }
}
