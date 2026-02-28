import { Response } from "express"
import React, { ReactNode } from "react"
import { PostsPage } from "../PostsPage"
import { Form } from "../../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../../submodules/rapdv/server/server/Request"
import { HttpStatus } from "../../../submodules/rapdv/server/network/HttpStatus"
import { Collection } from "../../../submodules/rapdv/server/database/Collection"

export class EditCommentPage {
  public static publishComment = async (req: Request, res: Response): Promise<ReactNode> => {

    if (process.env.DISABLE_POSTING_COMMENTS === "true") {
      req.flash(FlashType.Errors, "Posting comments is disabled")
      res.redirect(HttpStatus.SEE_OTHER, `/article/${req.params.key}`)
      return
    }

    const { success, form } = await Form.getParams(req, PostsPage.renderPost(req, res), "comment")

    if (!success) return
    const postId = form.inputs["postId"].value

    try {
      const content = form.inputs["comment"].value
      const collectionComment = Collection.get("Comment")
      const comment = collectionComment.create()

      comment.content = content
      comment.postId = postId
      comment.authorId = req.user._id
      comment.publishedDate = new Date()

      await collectionComment.repository.save(comment)

      req.flash(FlashType.Success, "Posted comment.")
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    res.redirect(HttpStatus.SEE_OTHER, `/article/${req.params.key}`)
  }

  public static deleteComment = async (req: Request, res: Response): Promise<ReactNode> => {
    const commentId = req.body.commentId
    const collectionComment = Collection.get("Comment")
    const comment = await collectionComment.findById(commentId)

    if (!comment) {
      req.flash(FlashType.Errors, "Can't find comment.")
    } else {
      const isAuthor = Collection.areEntriesSame(comment.authorId, req.user)
      if (!req?.user?.isAdmin() && !isAuthor) {
        req.flash(FlashType.Errors, "You can't remove it.")
      } else {
        await collectionComment.repository.remove(comment)
        req.flash(FlashType.Success, "Removed comment.")
      }
    }

    res.redirect(HttpStatus.SEE_OTHER, `/article/${req.params.key}`)
    return
  }
}
