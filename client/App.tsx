import { AppClient } from "../submodules/rapdv/client/app/AppClient"
import { ClientPage } from "../submodules/rapdv/client/elements/PagesCtrl"
import { PageEditPost } from "./PageEditPost"
import "./styles/style.scss"

const pages: Array<ClientPage> = []
pages.push(new PageEditPost())

const app = new AppClient()
app.start(pages)
