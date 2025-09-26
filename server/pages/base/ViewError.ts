import { html } from "../../../submodules/rapdv/server/html/Html"

type Props = {
  error: any
}

export const ViewError = ({ error }: Props) => {
  return html`
    <div style="padding: 30px">
      <h1>${error?.message}</h1>
      <h2>${error?.status}</h2>
      <pre>${error?.stack}</pre>
    </div>
  `
}
