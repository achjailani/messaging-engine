"use strict";

const { findByThreadId } = require("../../services/message.service.js");

const thread = async (req, res) => {
	let { threadId } = req.params;
	if(!threadId) {
		return res.status(400).send({
			message: "Missing parameter."
		});
	}
	try {
		const response = await findByThreadId(threadId);
		if(response.code === 404) {
			return res.status(response.code).send({ message: response.message});
		}
		return res.status(response.code).send({
			success: true,
			data: response.data
		});
	} catch(error) {
		return res.status(error.code).send({message: error.message});
	}
}

module.exports = { thread }
