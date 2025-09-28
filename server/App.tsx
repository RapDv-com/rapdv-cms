import React, { ReactNode } from "react"
import { RssFeed } from "./api/RssFeed"
import { EditCommentPage } from "./pages/user/EditCommentPage"
import { EditPostPage } from "./pages/admin/EditPostPage"
import { LogInPage } from "./pages/LogInPage"
import { PostsPage } from "./pages/PostsPage"
import { ProfilePage } from "./pages/user/ProfilePage"
import { PageTerms } from "./pages/PageTerms"
import { PagePrivacy } from "./pages/PagePrivacy"
import { Schema } from "mongoose"
import { UsersPage } from "./pages/admin/UsersPage"
import { RapDvApp } from "../submodules/rapdv/server/RapDvApp"
import { ReqType } from "../submodules/rapdv/server/ReqType"
import { Role } from "../submodules/rapdv/server/Role"
import { UserRole } from "../submodules/rapdv/server/database/CollectionUser"
import { Request } from "../submodules/rapdv/server/server/Request"
import { Mailer } from "../submodules/rapdv/server/mailer/Mailer"
import { VerifyEmailPage } from "./pages/VerifyEmailPage"
import { AuthGoogle } from "../submodules/rapdv/server/auth/AuthGoogle"
import { ViewError } from "./pages/base/ViewError"
import { ViewLayout } from "./pages/base/ViewLayout"

export class App extends RapDvApp {
  constructor() {
    super()
  }

  getBasicInfo = () => ({
    name: "RapDv Blog",
    description: "RapDv Blog - Create apps quickly",
    themeColor: "#000000"
  })

  public initAuth: () => Promise<void> = async () => {
    AuthGoogle.configure()
  }

  getPages = async () => {
    this.addRoute(
      "/",
      ReqType.Get,
      PostsPage.renderList,
      "RapDv Blog - Create apps quickly",
      "RapDv is a rapid development framework for quickly creating any web application."
    )
    this.addRoute("/terms", ReqType.Get, PageTerms.render, "Terms and Conditions", "Our terms and conditions")
    this.addRoute("/privacy", ReqType.Get, PagePrivacy.render, "Privacy Policy", "Our privacy policy")

    this.addRoute("/log-in", ReqType.Get, LogInPage.render, "Log in", "Log in to our blog", [Role.Guest])
    this.addRoute("/log-in", ReqType.Post, LogInPage.login, "Log in", "Log in to our blog", [Role.Guest])

    this.addEndpoint("/log-in/google", ReqType.Get, LogInPage.loginWithGoogle, [Role.Guest])
    this.addEndpoint("/log-in/google/callback", ReqType.Get, LogInPage.loginWithGoogleCallback)

    this.addRoute(
      "/verify-email/:email",
      ReqType.Get,
      VerifyEmailPage.render,
      "Verify your email",
      "Verify your email",
      [Role.Guest],
      true
    )
    this.addRoute(
      "/verify-email/:email/:code",
      ReqType.Get,
      VerifyEmailPage.render,
      "Verify your email",
      "Verify your email",
      [Role.Guest],
      true
    )
    this.addRoute(
      "/verify-email/:email",
      ReqType.Post,
      VerifyEmailPage.verifyEmail,
      "Verify your email",
      "Verify your email",
      [Role.Guest],
      true
    )

    this.addGenericRoute("/log-out", ReqType.Get, LogInPage.logout, [Role.LoggedIn])
    this.addGenericRoute("/log-out", ReqType.Post, LogInPage.logout, [Role.LoggedIn])

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

    this.addEndpoint("/feed", ReqType.Get, RssFeed.get)
  }

  getLayout = async (
    req: Request,
    canonicalUrl: string,
    title: string,
    description: string,
    content: ReactNode | string,
    disableIndexing: boolean,
    clientFilesId: string,
    otherOptions?: any
  ): Promise<ReactNode> => {
    const appInfo = this.getBasicInfo()
    const appName = appInfo.name
    const photoSrc = await req?.user?.getPhotoSrc()
    const isProduction = RapDvApp.isProduction()
    return (
      <ViewLayout
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        disableIndexing={disableIndexing}
        isProduction={isProduction}
        appName={appName}
        req={req}
        photoSrc={photoSrc}
        clientFilesId={clientFilesId}
      >
        {content}
      </ViewLayout>
    )
  }

  getErrorView = async (error) => ({
    title: "Error | RapDv CMS",
    description: "Something went wrong",
    content: <ViewError error={error} />
  })

  getRoles = () => ["Writer"]

  getStorage = async () => {
    this.addCollection(
      "Post",
      {
        key: { type: String, unique: true },
        title: String,
        description: String,
        content: String,
        publishedDate: Date
      },
      []
    )

    this.addCollection("Comment", {
      content: String,
      post: { type: Schema.Types.ObjectId, ref: "Post" },
      author: { type: Schema.Types.ObjectId, ref: "User" },
      publishedDate: Date
    })
  }

  public startRecurringTasks = async (mailer: Mailer): Promise<void> => {
    // Place for starting recurring tasks
  }

  public addDatabaseEvolutions = async () => {
    // Place for adding database evolutions
    await this.addDbEvolution(1, "Initial database version", async (currentVersion: number) => { })
  }
}
