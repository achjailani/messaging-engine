"use strict";

const { findOnByAuthenticated, deleteThread } = require("../../services/thread.service.js");

const deletedThread = async (req, res) => {
	const { threadId } = req.params;
	if(!threadId) return res.status(400).send({ message: "Missing parameter."});
	const authenticatedId = req.information.id;

	try {
		const existThread = await findOnByAuthenticated(authenticatedId, threadId);
		if(existThread.success == true && existThread.code == 404)
			return res.status(404).send({ message: existThread.message});

		const removeThread = await deleteThread(threadId, authenticatedId);
		return res.status(200).send({ message: removeThread.message });
	} catch(error) {
		return res.status(500).send({ message: error.message });
	}
}

module.exports = { deletedThread };
