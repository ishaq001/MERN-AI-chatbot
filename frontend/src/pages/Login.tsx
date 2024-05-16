import { Box, Button, Typography } from "@mui/material"
import React from "react"
import CustomizedInput from "../components/shared/CustomizedInput"
import { IoIosLogIn } from "react-icons/io"

function Login() {
	return (
		<Box
			width={"100%"}
			height={"100%"}
			display={"flex"}
			flex={1}
		>
			<Box
				padding={8}
				display={{ md: "flex", sm: "none", xs: "none" }}
				sx={{ background: "transparent" }}
			>
				<img
					src='aibot.png'
					alt='loginImage'
					style={{ width: "400px", background: " transparent" }}
				/>
			</Box>
			<Box
				display={"flex"}
				flex={{ xs: 1, md: 0.5 }}
				justifyContent={"start"}
				alignItems={"center"}
				padding={2}
				ml={"auto"}
				mt={16}
			>
				<form
					style={{
						margin: "auto",
						padding: "30px",
						boxShadow: "10px 10px 20px #000",
						borderRadius: "10px",
						border: "none"
					}}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"center"}
					>
						<Typography
							variant='h4'
							textAlign={"center"}
							padding={2}
							fontWeight={"600"}
						>
							Login{" "}
						</Typography>
						<CustomizedInput
							// placeholder='Email'
							name='email'
							type='email'
							label='Email'
						/>
						<CustomizedInput
							// placeholder='Password'
							name='password'
							type='password'
							label='Password'
						/>
						<Button
							type='submit'
							sx={{
								px: 2,
								py: 1,

								borderRadius: 2,
								bgcolor: "#00fffc",
								":hover": {
									bgcolor: "#ffff",
									color: "#000000"
								}
                
							}}
              endIcon={<IoIosLogIn />}
						>
							Login
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}

export default Login
