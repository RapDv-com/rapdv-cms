import { AppClient } from "../submodules/rapdv/client/app/AppClient"
import { ClientPage } from "../submodules/rapdv/client/elements/PagesCtrl"
import { PageEditPost } from "./pages/PageEditPost"
import { PageLogin } from "./pages/PageLogin"
import "./styles/style.scss"

const pages: Array<ClientPage> = []
pages.push(new PageEditPost())
pages.push(new PageLogin())

const app = new AppClient()
app.start(pages)
