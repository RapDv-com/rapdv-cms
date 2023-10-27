import { Server } from "../submodules/rapdv/server/server/Server"

const server = new Server(() => {
  const App = require("./App").App
  const app = new App()
  return app
})
server.start()