import { NextFunction, Request, Response } from "express"
import User from "../models/User.js"
import { hash } from "bcrypt"

export const getAllUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	//get all users
	try {
		const users = await User.find()
		res.status(200).json({ message: "OK", users })
	} catch (e) {
		console.log(e)
		res.status(200).json({
			message: "Failed to get users",
			error: e.message
		})
	}
}

export const userSignUp = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	//user signup
	try {
		console.log("im here")
		const { name, email, password } = req.body
		console.log({ name, email, password })
		const hashedPassword = await hash(password, 10)
		const user = new User({ name, email, password: hashedPassword })
		user.save()
		console.log({ user })
		res.status(200).json({ message: "User created", id: user._id })
	} catch (e) {
		console.log(e)
		res.status(200).json({
			message: "Failed to create user",
			error: e.message
		})
	}
}
