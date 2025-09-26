import { AppClient } from "../submodules/rapdv/client/app/AppClient.js"
import { PageEditPost } from "./pages/PageEditPost.js"
import { PageLogin } from "./pages/PageLogin.js"
import "./styles/style.css"

const pages = []
pages.push(new PageEditPost())
pages.push(new PageLogin())

const app = new AppClient()
app.start(pages)

alert("Client App started")