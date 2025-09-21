import { CloudflareTurnstileClient } from "../../submodules/rapdv/client/elements/CloudflareTurnstileClient"
import { ClientPage } from "../../submodules/rapdv/client/elements/PagesCtrl"

export class PageLogin extends ClientPage {
  getPageId = () => "login"

  execute = () => {
    CloudflareTurnstileClient.init()
  }

  onPageClose = () => {}
}
