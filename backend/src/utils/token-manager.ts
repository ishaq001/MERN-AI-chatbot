import { NextFunction, Response, Request } from "express"
import jwt from "jsonwebtoken"
import { COOKIE_NAME } from "./constants.js"
export const createToken = (
	id: string,
	email: string,
	expiresIn: string
) => {
	const payLoad = { id, email }
	const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
		expiresIn: expiresIn
	})
	return token
}
export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.signedCookies[`${COOKIE_NAME}`]
	if(!token || token.trim() === '') {
		return res.status(401).json({message:"Token not Received"})
	}


	return new Promise((resolve, reject) => {
		return jwt.verify(token, process.env.JWT_SECRET, (err, success)=> {
			if(err){
				reject(err.message)
				return res.status(401).json({message:"Token Expired"})
			}else{
				console.log("success token verified")
				resolve(success);
				res.locals.jwtData = success;
				return next()
			}
		})
	})
}
