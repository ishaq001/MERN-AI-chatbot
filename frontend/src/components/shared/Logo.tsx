import { Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

function Logo() {
	return (
		<div
			style={{
				display: "flex",
				marginRight: "auto",
				alignItems: "center",
				gap: "10px"
			}}
		>
			<Link
				to={"/"}
				style={{
					display: "flex",
					alignItems: "center",
					gap: "8px", textDecoration: "none",
				}}
			>
				<img
					style={{
						borderRadius: "20%",
						width: "30px",
						height: "30px"
					}}
					src='openai.png'
					alt='logo'
				/>
				<Typography
					sx={{
						display: {
							md: "block",
							sm: "none",
							xs: "none"
						},
						mr: "auto",
						fontWeight: "800",
						textShadow: "2px 2px 20px #000",
						 color: "#fff"
					}}
				>
					<span style={{ fontSize: "22px" }}>MERN</span>
					{""} - GPT
				</Typography>
			</Link>
		</div>
	)
}

export default Logo
