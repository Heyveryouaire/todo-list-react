import React from "react"
import { Pane, Heading } from "evergreen-ui"

export default function Header() {

  return (
    <Pane
      height="50%"
      className="responsiveView"
      display="flex"
      justifyContent="center"
      padding={18}
    >
      <Heading size={800} paddingTop={18}>
        To do list
          </Heading>
    </Pane>
  )
}