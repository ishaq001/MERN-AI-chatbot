import React from "react"
import { Link } from "react-router-dom"

type NavigationLinkProps = {
	to: string
	bg: string
	text: string
	textColor: string
	onClick?: () => Promise<void>
}

const NavigationLink = ({
	text,
	textColor,
	to,
	bg
}: NavigationLinkProps) => {
	return (
		<Link
		className="nav-link"
			style={{ background: bg, color: textColor }}
			to={to}
		>
			{text}
		</Link>
	)
}

export default NavigationLink
