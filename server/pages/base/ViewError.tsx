// Copyright (C) Konrad Gadzinowski

import React, { ReactNode } from "react"

type Props = {
  error: any
}

export class ViewError extends React.Component<Props> {
  render(): ReactNode | string {
    const { error } = this.props
    return <div style={{ padding: "30px" }}>
      <h1>{error?.message}</h1>
      <h2>{error?.status}</h2>
      <pre>{error?.stack}</pre>
    </div>
  }
}



