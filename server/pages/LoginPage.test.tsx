import { expect } from "chai"
import { describe } from "mocha"
import { LogInPage } from "./LogInPage"
import ReactDOMServer from "react-dom/server"

describe("Login page", () => {
  it("renders log in fields", async () => {
    const renderedPage = await LogInPage.render(undefined)
    const html = ReactDOMServer.renderToStaticMarkup(renderedPage)
    expect(html).includes('No account needed. Just enter your email to get started.')
    expect(html).includes('Continue with Google')
  })
})
