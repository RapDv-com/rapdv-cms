import { html } from "../../../submodules/rapdv/server/html/Html"


export const ViewStyles = ({clientFilesId}) => {
  return html`
    <link rel="stylesheet" href="/client/styles/style.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/bootstrap/dist/css/bootstrap.min.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/bootstrap-icons/font/bootstrap-icons.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/medium-editor/dist/css/medium-editor.min.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/medium-editor/dist/css/themes/beagle.min.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/rapdv/app/styles/main.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/rapdv/app/styles/sizing.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/client/node_modules/nprogress/nprogress.css?id=${clientFilesId}" rel="stylesheet" type="text/css" />
    `
}
