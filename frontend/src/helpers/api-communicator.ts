import axios from "axios"
import toast from "react-hot-toast"

export const loginUser = async (email: string, password: string) => {
	try {
		toast.loading("Signing In...", { id: "login" })
		const res = await axios.post("/user/login", {
			email,
			password
		})
		if (res.status !== 200) {
			throw new Error("Unable to login")
		}
 
		const data = res.data
		toast.success("Signed In Successfully", { id: "login" })
		return data
	} catch (error) {
		toast.error("Unable to login", { id: "login" })
		console.log(error)
	}
}

export const checkAuthStatus = async () => {
	try {
		const res = await axios.get("/user/auth-status")
		if (res.status !== 200) {
			throw new Error("Unable to login")
		}
		const data = res.data
		return data
	} catch (error) {
		console.log(error)
	}
}
