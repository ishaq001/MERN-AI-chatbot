import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from "react"
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
	const [isLoggedIn, setIsloggedIn] = useState<boolean>(true)

	useEffect(() => {
		// fetch if user cookies are valid then dont need to login  again
	}, [])
	const login = async (name: string, email: string) => {}
	const logout = async () => {}
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
