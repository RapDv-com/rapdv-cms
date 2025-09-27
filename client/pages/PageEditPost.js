import { ClientPage } from "rapdv/elements/PagesCtrl";

export class PageEditPost extends ClientPage {
  getPageId = () => "edit-post"

  execute = () => {
    new MediumEditor('textarea[name="description"]', {})
    new MediumEditor('textarea[name="content"]', {})
  }

  onPageClose = () => {}
}
