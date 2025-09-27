import { html } from "../../../submodules/rapdv/server/html/Html"


export const ViewStyles = ({clientFilesId}) => {
  return html`
    <link rel="stylesheet" href="/client/styles/style.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/bootstrap/dist/css/bootstrap.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/medium-editor/dist/css/medium-editor.min.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/medium-editor/dist/css/themes/beagle.min.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    `
}