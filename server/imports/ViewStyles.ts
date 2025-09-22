
import { html } from "../../submodules/rapdv/server/html/Html"

export const ViewScripts = () => {
  return html`
    <link rel="stylesheet" href="/dist/App.css?id={{clientFilesId}}" rel="stylesheet" type="text/css" />
  `
}