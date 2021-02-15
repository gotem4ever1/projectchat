import React, { useState, useEffect } from "react"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import { useStateValue } from "./StateProvider"
import db from "./firebase"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import AddIcon from "@material-ui/icons/Add"
import LoopIcon from "@material-ui/icons/Loop"


function Sidebar() {
	const [{ user }] = useStateValue()
	const [channels, setChannels] = useState([])
	const [loading, setLoading] = useState("")

	useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			)
		})
	}, [])

	useEffect(() => {
		if (!channels.length)
			setLoading(<SidebarOption Icon={LoopIcon} title="Loading..." />)
		else setLoading("")
	}, [channels])

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>Let's Chat</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.displayName}
					</h3>
				</div>
				</div>
			<SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />

			{loading ||
				channels.map((channel) => (
					<SidebarOption
						key={channel.id}
						title={channel.name}
						id={channel.id}
					/>
				))}
		</div>
	)
}

export default Sidebar
