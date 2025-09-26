import { html } from "../../../submodules/rapdv/server/html/Html"
import { FlashMessages } from "../../../submodules/rapdv/server/ui/FlashMessages"
import { NavDropdown } from "../../../submodules/rapdv/server/ui/NavDropdown"
import { NavDropdownItem } from "../../../submodules/rapdv/server/ui/NavDropdownItem"
import { NavLink } from "../../../submodules/rapdv/server/ui/NavLink"
import { ViewScripts } from "./ViewScripts"
import { ViewStyles } from "./ViewStyles"

type Props = {
  title: string
  description: string
  canonicalUrl: string
  disableIndexing?: boolean
  isProduction?: boolean
  clientFilesId: string
  children: any
}

export const ViewLayout = ({ title, description, canonicalUrl, disableIndexing, children, isProduction, clientFilesId }: Props) => {
  const year = new Date().getFullYear()

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

      <${ViewStyles}
        clientFilesId=(clientFilesId)
      />

      </head>
      <body id='body'>
        <header>
          <Nav appName={appInfo.name} className="navbar-dark bg-dark">
            <ul className="navbar-nav me-auto">
            </ul>
            <ul className="navbar-nav ms-auto">
              <${NavLink} href="/log-in" icon="bi bi-box-arrow-in-left" req={req} restrictions={[Role.Guest]}>
                Log In
              <//>
              <${NavLink} href="/publish" req={req} restrictions={[UserRole.Admin, "Writer"]}>
                Publish
              <//>
              <${NavLink} href="/users" req={req} restrictions={[UserRole.Admin]}>
                Users
              <//>
              <${NavDropdown} title={req?.user?.email} icon={await req?.user?.getPhotoSrc()} req={req} restrictions={[Role.LoggedIn]}>
                <${NavDropdownItem} href="/profile">Profile<//>
                <${NavDropdownItem} href="/log-out">Log out<//>
              <//>
              <${NavLink} href="/feed" target="_blank" icon="bi bi-rss" req={req}>
                <span className="d-lg-none">RSS Feed</span>
              <//>
            </ul>
          </Nav>
        </header>
        <main>
          <${FlashMessages} req={req} />
          ${children}
        </main>
        <Footer>
          Company Inc ©{year}
          <Link href="/terms">Terms and Conditions<//>
          <Link href="/privacy">Privacy Policy<//>
        </Footer>
        <${ViewScripts}
          clientFilesId=(clientFilesId)
        />

        ${!isProduction && html`
          <script src="/reload/reload.js"></script>
        `}

      </body>
    </html>
    `
}