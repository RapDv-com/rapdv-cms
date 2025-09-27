import { Response } from "express"
import { SubmitForm } from "../../../submodules/rapdv/server/ui/SubmitForm"
import { Input } from "../../../submodules/rapdv/server/ui/Input"
import { Form } from "../../../submodules/rapdv/server/form/Form"
import { FlashType, Request } from "../../../submodules/rapdv/server/server/Request"
import { PageId } from "../../../submodules/rapdv/server/pages/PageId"
import { Textarea } from "../../../submodules/rapdv/server/ui/Textarea"
import { ReqType } from "../../../submodules/rapdv/server/ReqType"
import { Collection } from "../../../submodules/rapdv/server/database/Collection"
import { HttpStatus } from "../../../submodules/rapdv/server/network/HttpStatus"
import { VNode } from "preact"
import { html } from "../../../submodules/rapdv/server/html/Html"
import spacetime from "spacetime"

export class EditPostPage {
  public static render = async (req: Request): Promise<VNode> => {
    const { isNew, entry } = await Form.editEntry(req.params.key, "Post", { key: req.params.key })
    if (!isNew && !entry) {
      return html`<div>This post doesn't exist.</div>`
    } else {
      return html`
    <div>
      <${PageId}>edit-post<//>
      <${ProfileForm}
        title=${isNew ? "Publish" : "Edit"} Article
        name="edit"
        submitText=${isNew ? "Publish" : "Save"}
      >
        <${Input} type="text" name="title" value=${entry?.title} req=${req} required />
        <${Textarea} id="description" name="description" value=${entry?.description} req=${req} required />
        <${Textarea} id="content" name="content" value=${entry?.content} req=${req} required />
        <${Input}
          type="date"
          name="publishedDate"
          value=${spacetime(entry?.publishedDate).unixFmt("YYYY-MM-DD")}
          req=${req}
          required
        />
      <//>
      ${!isNew &&
      entry &&
      html`
        <${ProfileForm}
          method=${ReqType.Delete}
          name="delete"
          submitText="Delete"
          submitBtnClass="btn-danger"
        >
          <${Input} type="hidden" name="id" value=${entry?._id} required />
        <//>
      `}
    </div>
  `
    }
  }

  public static save = async (req: Request, res: Response): Promise<VNode> => {
    const { success, form } = await Form.getParams(req, EditPostPage.render(req), "edit")
    if (!success) return
    try {
      const { isNew, entry } = await Form.editEntry(req.params.key, "Post", { key: req.params.key })
      if (!isNew && !entry) {
        return html`<div>This post doesn't exist.</div>`
      }

      const title = form.inputs["title"].value
      const collectionPost = Collection.get("Post")

      if (isNew) {
        const key = await collectionPost.generateKey(null, title, (key) => collectionPost.findOne({ key }))
        entry.key = key
      }
      entry.title = title
      ;(entry.description = form.inputs["description"].value),
        (entry.content = form.inputs["content"].value),
        (entry.publishedDate = new Date(form.inputs["publishedDate"].value))
      await entry.save()

      if (isNew) {
        req.flash(FlashType.Success, "Success! Posted article.")
      } else {
        req.flash(FlashType.Success, "Saved changes.")
      }
      res.redirect(HttpStatus.SEE_OTHER, `/article/${entry.key}`)
      return
    } catch (error) {
      req.flash(FlashType.Errors, error)
    }

    return EditPostPage.render(req)
  }

  public static deletePost = async (req: Request, res: Response): Promise<VNode> => {
    const { success, form } = await Form.getParams(req, EditPostPage.render(req), "delete")
    if (!success) return
    try {
      await Collection.deleteEntry("Post", { _id: req.body.id })
    } catch (error) {
      req.flash(FlashType.Errors, error)
      return EditPostPage.render(req)
    }
    req.flash(FlashType.Success, "Removed article.")
    res.redirect(HttpStatus.SEE_OTHER, "/")
  }
}

const ProfileForm = (props) => {
  return html`
    <${SubmitForm}
      ...${props}
      style=${{
        width: "100%",
        maxWidth: "800px",
        ...(props.style || {}), // allow overrides
      }}
    />
  `
}