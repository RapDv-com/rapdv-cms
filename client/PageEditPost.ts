import MediumEditor from "../client-libs/node_modules/medium-editor/dist/js/medium-editor.min.js"
import { ClientPage } from "../submodules/rapdv/client/elements/PagesCtrl.js"
import "../client-libs/node_modules/medium-editor/dist/css/medium-editor.min.css"
import "../client-libs/node_modules/medium-editor/dist/css/themes/beagle.min.css"

export class PageEditPost implements ClientPage {
  getPageId = (): string => "edit-post"

  execute = (): void => {
    new MediumEditor('textarea[name="description"]', {})
    new MediumEditor('textarea[name="content"]', {})
  }

  onPageClose = (): void => {}
}
