"use strict";

const { findAllExceptAuthenticated } = require("../../services/user.service.js");
module.exports = {
	getAll: async (req, res) => {
		try {
			const authenticatedId = req.information.id; 
			const response = await findAllExceptAuthenticated(authenticatedId);
			return res.status(200).send({...response});
		} catch (error) {
			return res.status(error.code).send({
				message: error.message
			});
		}
	}
}