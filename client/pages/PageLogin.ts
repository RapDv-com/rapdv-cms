import { CloudflareTurnstileClient } from "../../submodules/rapdv/client/elements/CloudflareTurnstileClient"
import { ClientPage } from "../../submodules/rapdv/client/elements/PagesCtrl"

export class PageLogin implements ClientPage {
  getPageId = (): string => "login"

  execute = (): void => {
    CloudflareTurnstileClient.init()
  }

  onPageClose = (): void => {}
}
