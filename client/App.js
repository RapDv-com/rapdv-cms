import { AppClient } from "rapdv/app/AppClient"
import { PageEditPost } from "pages/PageEditPost"
import { PageLogin } from "pages/PageLogin"

window.CLOUDFLARE_TURNSLIDE_KEY_CLIENT="0x4AAAAAAA01yp6rq0rRMZgw"

const pages = []
pages.push(new PageEditPost())
pages.push(new PageLogin())

const app = new AppClient()
app.start(pages)
