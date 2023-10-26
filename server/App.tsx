import React, { ReactNode } from "react"
import { RssFeed } from "./api/RssFeed"
import { ChangePasswordPage } from "./pages/ChangePasswordPage"
import { EditCommentPage } from "./pages/EditCommentPage"
import { CreateAccountPage } from "./pages/CreateAccountPage"
import { EditPostPage } from "./pages/EditPostPage"
import { LogInPage } from "./pages/LogInPage"
import { PostsPage } from "./pages/PostsPage"
import { ProfilePage } from "./pages/ProfilePage"
import { PageTerms } from "./pages/PageTerms"
import { PagePrivacy } from "./pages/PagePrivacy"
import { ResetPasswordPage } from "./pages/ResetPasswordPage"
import { Schema } from "mongoose"
import { UsersPage } from "./pages/UsersPage"
import { AppBasicInfo, RapDvApp } from "../submodules/rapdv/server/RapDvApp"
import { ReqType } from "../submodules/rapdv/server/ReqType"
import { Role } from "../submodules/rapdv/server/Role"
import { NavLink } from "../submodules/rapdv/server/ui/NavLink"
import { Nav } from "../submodules/rapdv/server/ui/Nav"
import { NavDropdownItem } from "../submodules/rapdv/server/ui/NavDropdownItem"
import { NavDropdown } from "../submodules/rapdv/server/ui/NavDropdown"
import { FlashMessages } from "../submodules/rapdv/server/ui/FlashMessages"
import { Footer } from "../submodules/rapdv/server/ui/Footer"
import { Link } from "../submodules/rapdv/server/ui/Link"
import { UserRole } from "../submodules/rapdv/server/database/CollectionUser"
import { Request } from "../submodules/rapdv/server/server/Request"
import { EmailService } from "../submodules/rapdv/server/mailer/EmailService"

export class App extends RapDvApp {
  constructor() {
    super()
  }

  setBasicInfo = () => ({
    name: "RapDv Blog",
    description: "RapDv Blog - Create apps quickly",
    themeColor: "#000000"
  })

  setPages = async () => {
    this.addRoute(
      "/",
      ReqType.Get,
      PostsPage.renderList,
      "RapDv Blog - Create apps quickly",
      "RapDv is a low-code framework for quickly creating any web application."
    )
    this.addRoute("/terms", ReqType.Get, PageTerms.render, "Terms and Conditions", "Our terms and conditions")
    this.addRoute("/privacy", ReqType.Get, PagePrivacy.render, "Privacy Policy", "Our privacy policy")

    this.addRoute("/log-in", ReqType.Get, LogInPage.render, "Log in", "Log in to our blog", [Role.Guest])
    this.addRoute("/log-in", ReqType.Post, LogInPage.login, "Log in", "Log in to our blog", [Role.Guest])

    this.addRoute(
      "/forgot-password",
      ReqType.Get,
      ResetPasswordPage.renderForgot,
      "I forgot password",
      "We can reset your password, if you forgot it",
      [Role.Guest]
    )
    this.addRoute("/forgot-password", ReqType.Post, ResetPasswordPage.remind, "I forgot password", "We can reset your password, if you forgot it", [
      Role.Guest
    ])

    this.addRoute("/reset-password/:token", ReqType.Get, ResetPasswordPage.renderReset, "Reset password", "Reset your password", [Role.Guest], true)
    this.addRoute("/reset-password/:token", ReqType.Post, ResetPasswordPage.reset, "Reset password", "Reset your password", [Role.Guest], true)

    this.addGenericRoute("/log-out", ReqType.Get, LogInPage.logout, [Role.LoggedIn])
    this.addGenericRoute("/log-out", ReqType.Post, LogInPage.logout, [Role.LoggedIn])

    this.addRoute("/create-account", ReqType.Get, CreateAccountPage.render, "Create Account", "Create account on our blog", [Role.Guest])
    this.addRoute("/create-account", ReqType.Post, CreateAccountPage.register, "Create Account", "Create account on our blog", [Role.Guest])

    this.addRoute(
      "/verify-email/:token",
      ReqType.Get,
      CreateAccountPage.verifyEmail,
      "Verify your email",
      "Verify your email to use the app.",
      [],
      true
    )

    this.addRoute("/change-password", ReqType.Get, ChangePasswordPage.render, "Change password", "Change your password", [Role.LoggedIn])
    this.addRoute("/change-password", ReqType.Post, ChangePasswordPage.changePassword, "Change password", "Change your password", [Role.LoggedIn])

    this.addRoute("/profile", ReqType.Get, ProfilePage.render, "Profile", "Edit your profile", [Role.LoggedIn])
    this.addRoute("/profile", ReqType.Post, ProfilePage.edit, "Profile", "Edit your profile", [Role.LoggedIn], false, true)

    this.addRoute("/article/:key", ReqType.Get, PostsPage.renderPost, PostsPage.getPageTitle, PostsPage.getPageDescription)
    this.addRoute("/article/comment/:key", ReqType.Post, EditCommentPage.publishComment, "", "", [Role.LoggedIn])
    this.addRoute("/article/comment/:key", ReqType.Delete, EditCommentPage.deleteComment, "", "", [Role.LoggedIn])
    this.addRoute("/publish", ReqType.Get, EditPostPage.render, "Publish article", "Publish article", [UserRole.Admin, "Writer"])
    this.addRoute("/publish", ReqType.Post, EditPostPage.save, "Publish article", "Publish article", [UserRole.Admin, "Writer"])
    this.addRoute("/publish/:key", ReqType.Get, EditPostPage.render, "Edit article", "Edit article", [UserRole.Admin, "Writer"])
    this.addRoute("/publish/:key", ReqType.Post, EditPostPage.save, "Edit article", "Edit article", [UserRole.Admin, "Writer"])
    this.addRoute("/publish/:key", ReqType.Delete, EditPostPage.deletePost, "Delete article", "Delete article", [UserRole.Admin, "Writer"])

    this.addRoute("/users", ReqType.Get, UsersPage.renderUsersList, "Users List", "Users list", [UserRole.Admin])
    this.addRoute("/user/:email", ReqType.Get, UsersPage.renderUser, "Edit user", "Edit user", [UserRole.Admin])
    this.addRoute("/user/:email", ReqType.Post, UsersPage.updateUser, "Edit user", "Edit user", [UserRole.Admin])

    this.addEndpoint("/v1/rss", ReqType.Get, RssFeed.get)
  }

  setLayout = async (req: Request, content: ReactNode, appInfo: AppBasicInfo): Promise<ReactNode> => {
    const year = new Date().getFullYear()
    return (
      <>
        <header>
          <Nav appName={appInfo.name}>
            <ul className="navbar-nav ms-auto">
              <NavLink href="/log-in" icon="bi bi-box-arrow-in-left" req={req} restrictions={[Role.Guest]}>
                Log In
              </NavLink>
              <NavLink href="/create-account" icon="bi bi-person-plus-fill" req={req} restrictions={[Role.Guest]}>
                Create Account
              </NavLink>
              <NavLink href="/publish" req={req} restrictions={[UserRole.Admin, "Writer"]}>
                Publish
              </NavLink>
              <NavLink href="/users" req={req} restrictions={[UserRole.Admin]}>
                Users
              </NavLink>
              <NavDropdown title={req?.user?.email} icon={await req?.user?.getPhotoSrc()} req={req} restrictions={[Role.LoggedIn]}>
                <NavDropdownItem href="/profile">Profile</NavDropdownItem>
                <NavDropdownItem href="/log-out">Log out</NavDropdownItem>
              </NavDropdown>
            </ul>
          </Nav>
        </header>
        <main>
          <FlashMessages req={req} />
          {content}
        </main>
        <Footer>
          Company Inc ©{year}
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </Footer>
      </>
    )
  }

  setRoles = () => ["Writer"]

  setStorage = async () => {
    this.addCollection(
      "Post",
      {
        key: { type: String, unique: true },
        title: String,
        description: String,
        content: String,
        publishedDate: Date
      },
      {}
    )

    this.addCollection("Comment", {
      content: String,
      post: { type: Schema.Types.ObjectId, ref: "Post" },
      author: { type: Schema.Types.ObjectId, ref: "User" },
      publishedDate: Date
    })

    await this.addDbEvolution(1, "Initial database version", async (currentVersion: number) => {})
  }

  public startRecurringTasks = async (emailService: EmailService): Promise<void> => {
    // Place for starting recurring tasks
  }
}

const app = new App()
app.start()
