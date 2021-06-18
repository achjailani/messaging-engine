"use strict";

const { findAll } = require("../../services/thread.service.js");

const list = async (req, res) => {
	let userId = 4;
	try {
		const response = await findAll(userId);
		return res.status(200).send(response);
	} catch(error) {
		return res.status(500).send({message: error.message});
	}
}

module.exports = { list };