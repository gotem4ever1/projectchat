import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { StateProvider } from "./components/StateProvider"
import reducer, { initialState } from "./components/reducer"
import App from "./components/App"
import * as serviceWorker from "./components/serviceWorker"

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
