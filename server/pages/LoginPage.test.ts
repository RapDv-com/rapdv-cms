import { expect } from "chai"
import { describe } from "mocha"
import { LogInPage } from "./LogInPage"
import { render } from "preact-render-to-string"

describe("Login page", () => {
  it("renders email and password fields", async () => {
    const renderedPage = await LogInPage.render(undefined)
    const html = render(renderedPage)
    expect(html).includes('<input id="floatingemail" class="form-control" type="email" required="" name="email" placeholder="Email"/>')
    expect(html).includes('<input id="floatingpassword" class="form-control" type="password" required="" name="password" placeholder="Password"/>')
  })
})
