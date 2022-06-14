import React, { ReactNode } from "react"
import { NextFunction, Response } from "express"
import { Input, SubmitForm, Form, Link, FlashType, Request, AuthEmail, PageId } from "rapdv-lib"

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
    await AuthEmail.logout(req)
    req.flash(FlashType.Success, "You are logged out.")
    res.redirect("/log-in")
  }
}
