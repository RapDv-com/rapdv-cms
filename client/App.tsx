import { AppClient, ClientPage } from "../node_modules/rapdv-lib/dist/client/main.js"
import "../node_modules/rapdv-lib/dist/client/main.css"
import { PageEditPost } from "./PageEditPost"
import "./styles/style.scss"

const pages: Array<ClientPage> = []
pages.push(new PageEditPost())

const app = new AppClient()
app.start(pages)
