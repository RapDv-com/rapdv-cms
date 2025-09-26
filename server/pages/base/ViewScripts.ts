import { html } from "../../../submodules/rapdv/server/html/Html"

export const ViewScripts = ({clientFilesId}) => {
  return html`
    <script src="/client/App.js?id=${clientFilesId}" type="module"></script>
  `
}