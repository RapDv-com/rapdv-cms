import { Response } from "express"
import moment from "moment-timezone"
import { Collection } from "../../submodules/rapdv/server/database/Collection"
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
import { VNode } from "preact"
import { html } from "../../submodules/rapdv/server/html/Html"

export class PostsPage {
  public static renderList = async (req: Request): Promise<VNode> => {
    const postsModel = Collection.get("Post")
    const count = await postsModel.count()
    const from = Paginator.getFromPosition(req, count)
    const collectionComment = Collection.get("Comment")
    let posts = await postsModel.findAll(undefined, from, Paginator.ITEMS_PER_PAGE, [], { publishedDate: -1 })
    posts = await Promise.all(
      posts.map(async (post, index) => {
        const commentsCount = await collectionComment.count({ post: post._id })
        const postData = post.toObject()
        return { ...postData, commentsCount }
      })
    )

    if (!posts || posts.length === 0) {
      return html`<div>There are no posts yet.</div>`
    }

    const showCommentsCount = (post: any) => {
      if (post.commentsCount === 1) return "1 comment"
      if (post.commentsCount > 1) return `${post.commentsCount} comments`
      return "No comments"
    }

    return html`
    <div class="list-group mb-4">
      ${posts.map(
        (post, index) => html`
          <a
            key=${index}
            href=${`/article/${post.key}`}
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${post?.title ?? ""}</h5>
              <small class="ps-4">${moment(post?.publishedDate).fromNow()}</small>
            </div>
            <p class="mb-1">${post?.description ?? ""}</p>
            <small>${showCommentsCount(post)}</small>
          </a>
        `
      )}
    </div>
    <${Paginator} req=${req} itemsCount=${count} />
  `
  }

  public static renderPost = async (req: Request, res: Response): Promise<VNode> => {
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

    return html`
    <div>
      <div>
        <h1>${post.title}</h1>
        <div class="d-flex">
          <div class="flex-grow-1">
            ${moment(post.publishedDate).format("DD MMM YYYY")}
          </div>
          ${canEdit &&
          html`
            <div>
              <${Link} href=${`/publish/${key}`}>Edit<//>
            </div>
          `}
        </div>
      </div>
      <div><hr /></div>
      <div>${post.content}</div>
      <br />
      <div>
        ${areComments &&
        html`
          <hr />
          <${List}
            fields=${[
              { key: "content", title: "Comment" },
              {
                key: "author",
                custom: (entry) =>
                  html`${entry.author.firstName ?? "Anonymous"}
                    ${entry.author.lastName}`
              },
              {
                key: "publishedDate",
                custom: (entry) =>
                  html`${moment(entry.publishedDate).format("DD MMM YYYY HH:mm")}`
              },
              {
                key: "",
                custom: (entry) => {
                  const isAuthor = Collection.areEntriesSame(entry.author, req.user)
                  if (req?.user?.isAdmin() || isAuthor) {
                    return html`
                      <${ButtonAjax}
                        class="btn btn-light"
                        action=${`/article/comment/${post.key}`}
                        method=${ReqType.Delete}
                        params=${{ commentId: entry._id }}
                      >
                        <i class="bi bi-trash3"></i>
                      <//>
                    `
                  }
                  return null
                }
              }
            ]}
            data=${allComments}
          />
        `}
        ${isUserLoggedIn && html`<hr />`}
        ${isUserLoggedIn &&
        html`
          <${SubmitForm}
            title="Post comment"
            name="comment"
            action=${`/article/comment/${post.key}`}
            submitText="Post"
          >
            <${Input} type="hidden" name="postId" value=${post._id} required />
            <${Input} type="text" name="comment" required />
          <//>
        `}
      </div>
    </div>
  `
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
