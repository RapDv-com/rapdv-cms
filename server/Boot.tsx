import { Server } from "../submodules/rapdv/server/server/Server"
import { App } from "./App"

const app = new App()
const server = new Server(app)
server.start()