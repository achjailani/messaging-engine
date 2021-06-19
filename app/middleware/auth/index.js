"use strict";

require("dotenv").config();

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.APP_SECRET;

module.exports = {
	decode: (req, res, next) => {
		if(!req.headers["authorization"]) {
			return res.status(401).send({
				message: "No token provided"
			});
		}
		try {
			const token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.decode(token, SECRET_KEY);
			req.information = decoded
			next();
		} catch(error) {
			console.log(error)
			return res.status(401).send({
				message: "Invalid auth token"
			});
		}
	},
	encode: (data) => {
		const payload = {
			id: data.id,
			email: data.email
		};

		const token = jwt.sign(payload, SECRET_KEY, {
			expiresIn: "1d"
		});
		return token;
	}
};
