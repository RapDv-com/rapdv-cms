import { html } from "../../../submodules/rapdv/server/html/Html"

export const ViewScripts = () => {
  return html`
    <script src="/dist/App.js?id={{clientFilesId}}"></script>
  `
}