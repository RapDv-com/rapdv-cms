import { AppClient } from "app/AppClient"
import { PageEditPost } from "pages/PageEditPost"
import { PageLogin } from "pages/PageLogin"

const pages = []
pages.push(new PageEditPost())
pages.push(new PageLogin())

const app = new AppClient()
app.start(pages)
