import { html } from "../../../submodules/rapdv/server/html/Html"

type Props = {
  message: string
  error: any
}

export const ViewError = ({ message, error }: Props) => {
  return html`
    <div style="padding: 30px">
      <h1>${message}</h1>
      <h2>${error?.status}</h2>
      <pre>${error?.stack}</pre>
    </div>
  `
}
