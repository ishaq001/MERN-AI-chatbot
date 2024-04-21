import { NextFunction, Request, Response } from "express"
import {
	ValidationChain,
	body,
	validationResult
} from "express-validator"

export const validate = (validations: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		for (let validation of validations) {
			const result = await validation.run(req)
			if (!result.isEmpty()) {
				break
			}
		}
		const errors = validationResult(req)
		if (errors.isEmpty()) {
			return next()
		} else {
			return res.status(422).json({ errors: errors.array() })
		}
	}
}

export const signUpValidator = [
	body("name").notEmpty().withMessage("Name is required"),
	body("email").trim().isEmail().withMessage("Email is required"),
	body("password")
		.trim()
		.isLength({ min: 6 })
		.withMessage("Password should be at least 6 characters")
]

export const loginValidator = [
	body("email").trim().isEmail().withMessage("Email is required"),
	body("password")
		.trim()
		.isLength({ min: 6 })
		.withMessage("Password should be at least 6 characters")
]