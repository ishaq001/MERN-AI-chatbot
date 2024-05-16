import { AppBar, Toolbar } from "@mui/material"
import React from "react"
import Logo from "./shared/Logo"
import { useAuth } from "../context/AuthContext"
import NavigationLink from "./shared/NavigationLink"

function Header() {
	const auth = useAuth()
	return (
		<AppBar
			sx={{
				bgcolor: "transparent",
				position: "static",
				boxShadow: "none"
			}}
		>
			<Toolbar sx={{ display: "flex" }}>
				<Logo />
				<div>
					{auth?.isLoggedIn ? (
						<>
							<NavigationLink
								text='Go to Chat'
								textColor='black'
								to='/chat'
								bg='#00fffc'
							/>
							<NavigationLink
								text='Logout'
								textColor='white'
								to='/'
								onClick={auth?.logout}
								bg='#51538f'
							/>
						</>
					) : (
						<>
							<NavigationLink
								text='Login'
								textColor='black'
								to='/login'
								bg='#00fffc'
							/>
							<NavigationLink
								text='Signup'
								textColor='white'
								to='/signup'
								bg='#51538f'
							/>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header
