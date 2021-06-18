"use strict";

let Validator = require('validatorjs');

module.exports = {
	basicLogin: async (req, res, next) => {
		try {
			const validation = new Validator({...req.body}, {
				email: "required|email|min:3",
				password: "required|string"
			});
			if(validation.fails()) {
				return res.status(422).send({ ...validation.errors });
			}
			next();
		} catch(error) {
			return res.status(500).send({ message: error.message });
		}
	},
	basicRegistration: async (req, res, next) => {
		try {
			const validation = new Validator({...req.body}, {
				fullname: "required|min:3|string",
				email: "required|min:3|email",
				phone: "required|min:10|string",
				password: "required|string|min:6|confirmed"
			});
			if(validation.fails()) {
				return res.status(422).send({...validation.errors});
			}
			next();
		} catch(error) {
			return res.status(500).send({ message: error.message });
		}
	}
}