import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from "react"
import {
	checkAuthStatus,
	loginUser
} from "../helpers/api-communicator"
type UserAuth = {
	isLoggedIn: boolean
	user: User | null
	login: (email: string, password: string) => Promise<void>
	logout: () => Promise<void>
	signup: (
		name: string,
		email: string,
		password: string
	) => Promise<void>
}
type User = {
	name: string
	email: string
	// password: string,
	// id: string,
	// role: string,
	// token: string
}
const AuthContext = createContext<UserAuth | null>(null)
type ChildrenType = {
	children: ReactNode
}
export const AuthProvider = ({ children }: ChildrenType) => {
	const [user, setUser] = useState<User | null>(null)
	const [isLoggedIn, setIsloggedIn] = useState<boolean>(false)

	useEffect(() => {
		// fetch if user cookies are valid then dont need to login  again
		console.log("inside usssEffect", "data")

		async function checkSatus() {
			const data = await checkAuthStatus()
			if (data) {
				console.log(data)
				setUser({ email: data.email, name: data.name })
				setIsloggedIn(true)
			}
		}
		checkSatus()
	}, [])

	// login User
	const login = async (email: string, password: string) => {
		const data = await loginUser(email, password)
		if (data) {
			setUser({ email: data.email, name: data.name })
			setIsloggedIn(true)
		}
	}

	// logout User
	const logout = async () => {}

	// Signup User
	const signup = async (
		name: string,
		email: string,
		password: string
	) => {}

	const value = {
		user,
		isLoggedIn,
		login,
		logout,
		signup
	}
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
