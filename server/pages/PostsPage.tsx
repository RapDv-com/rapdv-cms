import { Response } from "express"
import React, { ReactNode } from "react"
import parse from "html-react-parser"
import moment from "moment-timezone"
import { Collection, SetText, FlashType, Request, UserRole, Link, Paginator, List, SubmitForm, Input, ReqType, ButtonAjax } from "rapdv-lib"

export class PostsPage {
  public static renderList = async (req: Request): Promise<ReactNode> => {
    const postsModel = Collection.get("Post")
    const count = await postsModel.countAll(undefined)
    const from = Paginator.getFromPosition(req, count)
    const collectionComment = Collection.get("Comment")
    let posts = await postsModel.findAll(undefined, from, Paginator.ITEMS_PER_PAGE)
    posts = await Promise.all(
      posts.map(async (post, index) => {
        const commentsCount = await collectionComment.countAll({ post: post._id })
        return { ...post, commentsCount }
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
        <div className="list-group mb-4">
          {posts.map((post, index) => (
            <a key={index} href={`/article/${post.key}`} className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{parse(post?.title ?? "")}</h5>
                <small className="ps-4">{moment(post?.publishedDate).fromNow()}</small>
              </div>
              <p className="mb-1">{parse(post?.description ?? "")}</p>
              <small>{showCommentsCount(post)}</small>
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
    const allComments = await collectionComment.findAll({ post: post._id }, undefined, undefined, ["author"])
    const areComments = allComments.length > 0
    const isUserLoggedIn = !!req.user

    return (
      <div>
        <div>
          <h1>{parse(post.title)}</h1>
          <div className="d-flex">
            <div className="flex-grow-1">{moment(post.publishedDate).format("DD MMM YYYY")}</div>
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
                  { key: "publishedDate", custom: (entry) => <>{moment(entry.publishedDate).format("DD MMM YYYY HH:mm")}</> },
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
