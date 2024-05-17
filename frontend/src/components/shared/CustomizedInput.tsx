import { TextField } from "@mui/material"
import React from "react"

type CustomizedInputProps = {
	name: string
	type: string
	label: string
}

const CustomizedInput = ({
	name,
	type,
	label
}: CustomizedInputProps) => {
	return (
		<TextField
			margin='normal'
			InputLabelProps={{ style: { color: "#ffff" } }}
			inputProps={{
				style: {
					width: "400px",
					borderRadius: 10,
					fontSize: 20,
					color: "#ffff"
				}
			}}
			name={name}
			label={label}
			type={type}
		/>
	)
}

export default CustomizedInput
