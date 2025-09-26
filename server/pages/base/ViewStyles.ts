import { html } from "../../../submodules/rapdv/server/html/Html"


export const ViewStyles = ({clientFilesId}) => {
  return html`
    <link rel="stylesheet" href="/client/styles/style.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
  `
}