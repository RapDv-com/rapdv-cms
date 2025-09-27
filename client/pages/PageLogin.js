import { CloudflareTurnstileClient } from "elements/CloudflareTurnstileClient";
import { ClientPage } from "elements/PagesCtrl";

export class PageLogin extends ClientPage {
  getPageId = () => "login"

  execute = () => {
    CloudflareTurnstileClient.init()
  }

  onPageClose = () => {}
}
