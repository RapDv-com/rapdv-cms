import MediumEditor from "medium-editor";
import { ClientPage } from "elements/PagesCtrl";

export class PageEditPost extends ClientPage {
  getPageId = () => "edit-post"

  execute = () => {
    new MediumEditor('textarea[name="description"]', {})
    new MediumEditor('textarea[name="content"]', {})
  }

  onPageClose = () => {}
}
