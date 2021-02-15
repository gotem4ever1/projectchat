import React, { Component } from 'react'
import "./App.css"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom"
import Login from './Login'
import Header from "./Header"
import Sidebar from "./Sidebar"
import Chat from './Chat'
import { useStateValue } from "./StateProvider"

function App() {
	const [{ user }, dispatch] = useStateValue()

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<div className="app__main">
									</div>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	)
}

export default App
