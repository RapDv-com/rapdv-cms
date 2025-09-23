import { html } from "../../../submodules/rapdv/server/html/Html"
import { ViewScripts } from "./ViewScripts"
import { ViewStyles } from "./ViewStyles"

type Props = {
  title: string
  description: string
  canonicalUrl: string
  disableIndexing?: boolean
  isProduction?: boolean
  body: any
  headAdditionalTags: any
}

export const ViewLayout = ({ title, description, canonicalUrl, disableIndexing, body, isProduction, headAdditionalTags }: Props) => {
  return html`
  <!DOCTYPE html>
  <html lang="en">
    <head>

    <meta charset="utf-8" />
    <title>${title}</title>

    <meta name="description" content="${description}" />

    ${disableIndexing && html`
      <meta name="robots" content="noindex,nofollow" />
    `}

    <!-- Common metadata -->
    <meta name="author" content="Konrad Gadzinowski <konrad@digitaljetty.com>" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, minimal-ui" />
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Make app fullscreen -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- Startup configuration -->
    <link rel="manifest" href="/assets/manifest.json">

    <!-- Chrome icons for legacy browsers -->
    <link rel="icon" sizes="192x192" href="/assets/icons/192.png">
    <link rel="icon" sizes="128x128" href="/assets/icons/128.png">
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/icons/152.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/icons/144.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/icons/120.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/icons/114.png">
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/icons/76.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/icons/72.png">
    <link rel="apple-touch-icon-precomposed" href="/assets/icons/57.png">
    <link rel="icon" href="/client/assets/favicon.svg">

    ${ViewStyles()}
    ${headAdditionalTags}

    </head>
    <body id='body'>
      ${body}
      ${ViewScripts()}

      ${!isProduction && html`
        <script src="/reload/reload.js"></script>
      `}

    </body>
  </html>
  `
}