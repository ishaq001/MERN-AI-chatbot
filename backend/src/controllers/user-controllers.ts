import { NextFunction, Request, Response } from "express"
import User from "../models/User.js"
import { compare, hash } from "bcrypt"

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
		const { name, email, password } = req.body
		const existingUser = await User.findOne({ email })
		if (existingUser)
			res.status(404).json({ message: "User already registered" })
		const hashedPassword = await hash(password, 10)
		const user = new User({ name, email, password: hashedPassword })
		user.save()

		res.status(200).json({ message: "User created", id: user._id })
	} catch (e) {
		console.log(e)
		res.status(200).json({
			message: "Failed to create user",
			error: e.message
		})
	}
}

export const userLogin = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	//user login
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email })
		const isPasswordCorrect = await compare(password, user.password)
		if (!isPasswordCorrect)
			res.status(401).json({ message: "Incorrent Password" })
		if (!user) res.status(401).json({ message: "User not found" })
		res.status(200).json({ message: "login Successful", id: user._id })
	} catch (e) {
		console.log(e)
		res.status(200).json({
			message: "Failed to login",
			error: e.message
		})
	}
}
