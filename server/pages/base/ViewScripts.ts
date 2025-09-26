import { html } from "../../../submodules/rapdv/server/html/Html"

export const ViewScripts = ({clientFilesId}) => {
  return html`
    <script src="/dist/App.js?id=${clientFilesId}"></script>
  `
}