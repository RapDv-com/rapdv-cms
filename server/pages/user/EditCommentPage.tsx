import { Response } from "express"
import React, { ReactNode } from "react"
import { PostsPage } from "../PostsPage"
import { Form } from "../../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../../submodules/rapdv/server/server/Request"
import { HttpStatus } from "../../../submodules/rapdv/server/network/HttpStatus"
import { Collection } from "../../../submodules/rapdv/server/database/Collection"

export class EditCommentPage {
  public static publishComment = async (req: Request, res: Response): Promise<ReactNode> => {
    const { success, form } = await Form.getParams(req, PostsPage.renderPost(req, res), "comment")

    if (!success) return
    const postId = form.inputs["postId"].value

    try {
      const content = form.inputs["comment"].value
      const collectionComment = Collection.get("Comment")
      const comment = new collectionComment.model()

      comment.content = content
      comment.post = postId
      comment.author = req.user._id
      comment.publishedDate = new Date()

      await comment.save()

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
      const isAuthor = Collection.areEntriesSame(comment.author, req.user)
      if (!req?.user?.isAdmin() && !isAuthor) {
        req.flash(FlashType.Errors, "You can't remove it.")
      } else {
        await comment.delete()
        req.flash(FlashType.Success, "Removed comment.")
      }
    }

    res.redirect(HttpStatus.SEE_OTHER, `/article/${req.params.key}`)
    return
  }
}
