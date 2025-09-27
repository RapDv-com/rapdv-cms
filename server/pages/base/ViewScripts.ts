import { html } from "../../../submodules/rapdv/server/html/Html"
import { ImportMap } from "../../../submodules/rapdv/server/html/ImportMap"

export const ViewScripts = ({ clientFilesId }) => {
  return html`
    <${ImportMap}>
      {
        "imports": {
          "app/AppClient": "/rapdv/app/AppClient.js?id=${clientFilesId}",
          "pages/PageEditPost": "/client/pages/PageEditPost.js?id=${clientFilesId}",
          "pages/PageLogin": "/client/pages/PageLogin.js?id=${clientFilesId}",
          "elements/CloudflareTurnstileClient": "/rapdv/elements/CloudflareTurnstileClient.js?id=${clientFilesId}",
          "elements/PagesCtrl": "/rapdv/elements/PagesCtrl.js?id=${clientFilesId}",
          "medium-editor": "/client/node_modules/medium-editor/dist/js/medium-editor.min.js?id=${clientFilesId}"
        }
      }
    <//>
    <script src="/client/node_modules/bootstrap/dist/js/bootstrap.js?id=${clientFilesId}"></script>
    <script src="/client/App.js?id=${clientFilesId}" type="module"></script>
  `
}