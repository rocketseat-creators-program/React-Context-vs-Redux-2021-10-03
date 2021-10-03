import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Layout from "./pages/Home"
import store from "./app/store"

import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
