import { CloudflareTurnstileClient } from "elements/CloudflareTurnstileClient";
import { ClientPage } from "rapdv/elements/PagesCtrl";

export class PageLogin extends ClientPage {
  getPageId = () => "login"

  execute = () => {
    CloudflareTurnstileClient.init()
  }

  onPageClose = () => {}
}
