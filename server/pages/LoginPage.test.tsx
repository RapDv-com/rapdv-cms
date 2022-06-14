import { expect } from "chai"
import { describe } from "mocha"
import { LogInPage } from "./LogInPage"
import ReactDOMServer from "react-dom/server"

describe("Login page", function () {
  it("renders email and password fields", async () => {
    const renderedPage = await LogInPage.render(undefined)
    const html = ReactDOMServer.renderToStaticMarkup(renderedPage)
    expect(html).includes('<input id="floatingemail" class="form-control" type="email" required="" name="email" placeholder="Email"/>')
    expect(html).includes('<input id="floatingpassword" class="form-control" type="password" required="" name="password" placeholder="Password"/>')
  })
})
