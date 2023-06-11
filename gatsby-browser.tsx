import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import './src/styles/global.css'
import Layout from "./src/components/Layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}