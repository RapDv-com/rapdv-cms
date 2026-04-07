import { Response } from "express"
import React, { ReactNode } from "react"
import parse from "html-react-parser"
import { Collection } from "../../submodules/rapdv/server/database/Collection"
import { Database } from "../../submodules/rapdv/server/database/Database"
import { Paginator } from "../../submodules/rapdv/server/ui/Paginator"
import { FlashType, Request } from "../../submodules/rapdv/server/server/Request"
import { UserRole } from "../../submodules/rapdv/server/database/CollectionUser"
import { Link } from "../../submodules/rapdv/server/ui/Link"
import { List } from "../../submodules/rapdv/server/ui/List"
import { SubmitForm } from "../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../submodules/rapdv/server/ui/Input"
import { ButtonAjax } from "../../submodules/rapdv/server/ui/ButtonAjax"
import { ReqType } from "../../submodules/rapdv/server/ReqType"
import { SetText } from "../../submodules/rapdv/server/RapDvApp"
import spacetime from "spacetime"

export class PostsPage {
  public static renderList = async (req: Request): Promise<ReactNode> => {
    const postsModel = Collection.get("Post")
    const count = await postsModel.count()
    const from = Paginator.getFromPosition(req, count)
    const collectionComment = Collection.get("Comment")
    let posts = await postsModel.findAll(undefined, from, Paginator.ITEMS_PER_PAGE, [], { publishedDate: Database.DESC })
    posts = await Promise.all(
      posts.map(async (post, index) => {
        const commentsCount = await collectionComment.count({ post: post._id })
        const postData = post.toObject()
        return { ...postData, commentsCount }
      })
    )

    if (!posts || posts.length === 0) {
      return <div>There are no posts yet.</div>
    }

    const showCommentsCount = (post: any) => {
      if (post.commentsCount === 1) return "1 comment"
      if (post.commentsCount > 1) return `${post.commentsCount} comments`
      return "No comments"
    }

    return (
      <>
        <div className="post-list mb-4">
          {posts.map((post, index) => (
            <a key={index} href={`/article/${post.key}`} className="post-list-item">
              <div className="post-list-item-header">
                <h5 className="post-list-item-title">{parse(post?.title ?? "")}</h5>
                <span className="post-list-item-date">{spacetime.now().since(spacetime(post?.publishedDate)).rounded}</span>
              </div>
              <p className="post-list-item-description">{parse(post?.description ?? "")}</p>
              <span className="post-list-item-comments">{showCommentsCount(post)}</span>
            </a>
          ))}
        </div>
        <Paginator req={req} itemsCount={count} />
      </>
    )
  }

  public static renderPost = async (req: Request, res: Response): Promise<ReactNode> => {
    const key = req.params.key
    const collectionPost = Collection.get("Post")
    const post = await collectionPost.findOne({ key })

    if (!post) {
      req.flash(FlashType.Warning, "Article doesn't exist.")
      res.redirect("/")
      return
    }

    const canEdit = [UserRole.Admin, "Writer"].includes(req?.user?.role)
    const collectionComment = Collection.get("Comment")
    const allComments = await collectionComment.findAll({ post: post._id }, undefined, undefined, ["author"], { publishedDate: Database.DESC })
    const areComments = allComments.length > 0
    const isUserLoggedIn = !!req.user

    return (
      <div>
        <div>
          <h1>{parse(post.title)}</h1>
          <div className="d-flex">
            <div className="flex-grow-1">{spacetime(post.publishedDate).unixFmt("dd MMM YYYY")}</div>
            {canEdit && (
              <div>
                <Link href={`/publish/${key}`}>Edit</Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div>{parse(post.content)}</div>
        <br />
        <div>
          {areComments && (
            <>
              <hr />
              <List
                fields={[
                  { key: "content", title: "Comment" },
                  {
                    key: "author",
                    custom: (entry) => (
                      <>
                        {entry.author.firstName ?? "Anonymous"} {entry.author.lastName}
                      </>
                    )
                  },
                  { key: "publishedDate", custom: (entry) => <>{spacetime(entry.publishedDate).unixFmt("dd MMM YYYY HH:mm")}</> },
                  {
                    key: "",
                    custom: (entry) => {
                      const isAuthor = Collection.areEntriesSame(entry.author, req.user)
                      if (req?.user?.isAdmin() || isAuthor) {
                        return (
                          <ButtonAjax
                            className="btn btn-light"
                            action={`/article/comment/${post.key}`}
                            method={ReqType.Delete}
                            params={{ commentId: entry._id }}
                          >
                            <i className="bi bi-trash3"></i>
                          </ButtonAjax>
                        )
                      }
                      return <></>
                    }
                  }
                ]}
                data={allComments}
              />
            </>
          )}
          {isUserLoggedIn && <hr />}
          {isUserLoggedIn && (
            <SubmitForm title="Post comment" name="comment" action={`/article/comment/${post.key}`} submitText="Post">
              <Input type="hidden" name="postId" value={post._id} required />
              <Input type="text" name="comment" required />
            </SubmitForm>
          )}
        </div>
      </div>
    )
  }

  public static getPageTitle: SetText = async (req: Request, res: Response): Promise<string> => {
    const key = req.params.key
    const collectionPost = Collection.get("Post")
    const post = await collectionPost.findOne({ key })
    if (!post) return "---"
    return post.title
  }

  public static getPageDescription: SetText = async (req: Request, res: Response): Promise<string> => {
    const key = req.params.key
    const collectionPost = Collection.get("Post")
    const post = await collectionPost.findOne({ key })
    if (!post) return ""
    return post.description
  }
}
