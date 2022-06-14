import { ClientPage } from "../node_modules/rapdv-lib/dist/client/main.js"
import { Toaster } from "../client-libs/node_modules/bs-toaster"

export class PageLogIn implements ClientPage {
  getPageId = (): string => "login"

  execute = (): void => {
    const toast = new Toaster()
    toast.create("Hi!", "It's great to see you again!")
  }

  onPageClose = (): void => {}
}
