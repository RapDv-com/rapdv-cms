import MediumEditor from "medium-editor/dist/js/medium-editor.min.js"
import "medium-editor/dist/css/medium-editor.min.css"
import "medium-editor/dist/css/themes/beagle.min.css"
import { ClientPage } from "../../submodules/rapdv/client/elements/PagesCtrl"

export class PageEditPost extends ClientPage {
  getPageId = () => "edit-post"

  execute = () => {
    new MediumEditor('textarea[name="description"]', {})
    new MediumEditor('textarea[name="content"]', {})
  }

  onPageClose = () => {}
}
