import * as React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "./App"
import theme from "./theme"
import { BrowserRouter } from "react-router-dom"
import store from "./store"
import { Provider } from "react-redux"
import "./index.css"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.querySelector("#root")
)
