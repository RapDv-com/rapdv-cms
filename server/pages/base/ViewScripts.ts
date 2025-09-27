import { html } from "../../../submodules/rapdv/server/html/Html"
import { ImportMap } from "../../../submodules/rapdv/server/html/ImportMap"

export const ViewScripts = ({ clientFilesId }) => {
  return html`
    <${ImportMap}>
      {
        "imports": {
          "elements/CloudflareTurnstileClient": "/rapdv/elements/CloudflareTurnstileClient.js?id=${clientFilesId}",
          "rapdv/app/AppClient": "/rapdv/app/AppClient.js?id=${clientFilesId}",
          "rapdv/elements/PagesCtrl": "/rapdv/elements/PagesCtrl.js?id=${clientFilesId}",
          "rapdv/elements/Form": "/rapdv/elements/Form.js?id=${clientFilesId}",
          "pages/PageEditPost": "/client/pages/PageEditPost.js?id=${clientFilesId}",
          "pages/PageLogin": "/client/pages/PageLogin.js?id=${clientFilesId}"
        }
      }
    <//>
    <script src="/client/node_modules/bootstrap/dist/js/bootstrap.bundle.js?id=${clientFilesId}"></script>
    <script src="/client/node_modules/nprogress/nprogress.js?id=${clientFilesId}"></script>
    <script src="/client/node_modules/medium-editor/dist/js/medium-editor.min.js?id=${clientFilesId}"></script>
    <script src="/client/node_modules/pjax/pjax.js?id=${clientFilesId}"></script>
    <script src="/client/App.js?id=${clientFilesId}" type="module"></script>
  `
}
