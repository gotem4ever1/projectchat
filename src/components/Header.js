import React from "react"
import "./Header.css"
import { useStateValue } from "./StateProvider"
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom"


function Header() {
	const [{ user }] = useStateValue()


	return (
		<div className="header">
			<div className="header__left">
				<Avatar
					className="header__avatar"
					alt={user?.displayName}
					src={user?.photoURL}/>
						</div>

</div>
)
}


export default Header
