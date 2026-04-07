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
      <article className="article-view">
        <header className="article-header">
          <h1 className="article-title">{parse(post.title)}</h1>
          <div className="article-meta">
            <span className="article-date">{spacetime(post.publishedDate).unixFmt("dd MMM YYYY")}</span>
            {canEdit && <Link href={`/publish/${key}`} className="article-edit-link">Edit</Link>}
          </div>
        </header>
        <hr className="article-divider" />
        <div className="article-content">{parse(post.content)}</div>
        <div className="article-comments">
          {areComments && (
            <>
              <hr className="article-divider" />
              <h3 className="comments-heading">Comments</h3>
              <div className="comment-list">
                {allComments.map((entry: any, index: number) => {
                  const isAuthor = Collection.areEntriesSame(entry.author, req.user)
                  return (
                    <div key={index} className="comment-item">
                      <div className="comment-body">
                        <p className="comment-text">{entry.content}</p>
                        <div className="comment-footer">
                          <span className="comment-author">{entry.author?.firstName ?? "Anonymous"} {entry.author?.lastName}</span>
                          <span className="comment-date">{spacetime(entry.publishedDate).unixFmt("dd MMM YYYY HH:mm")}</span>
                        </div>
                      </div>
                      {(req?.user?.isAdmin() || isAuthor) && (
                        <ButtonAjax
                          className="btn btn-light btn-sm comment-delete"
                          action={`/article/comment/${post.key}`}
                          method={ReqType.Delete}
                          params={{ commentId: entry._id }}
                        >
                          <i className="bi bi-trash3"></i>
                        </ButtonAjax>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          )}
          {isUserLoggedIn && (
            <>
              <hr className="article-divider" />
              <SubmitForm title="Post a comment" name="comment" action={`/article/comment/${post.key}`} submitText="Post">
                <Input type="hidden" name="postId" value={post._id} required />
                <Input type="text" name="comment" required />
              </SubmitForm>
            </>
          )}
        </div>
      </article>
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
