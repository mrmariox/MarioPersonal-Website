import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import "prismjs/themes/prism-twilight.css"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.terminalWindow}>
    <Helmet>
      <meta name="description" content="Mario Georgiev's own little part of the internet." />
      <meta name="keywords" content="Mario, Georgiev, Manager, DevOps, Engineer, Resume, Docker, Bash," />
      <meta charset="UTF-8" />
      <html lang="en" />
      <title>Mario Georgiev's Space</title>
    </Helmet>
    <Header />
    <section className={layoutStyles.terminal}>
      {children}
    </section>
  </div>
)
