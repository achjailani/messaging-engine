"use strict";

const { updateToDeleted, findThreadById } = require("../../services/message.service.js");
const { findOnByAuthenticated } = require("../../services/thread.service.js");

const deleteMessage = async (req, res) => {
	const { messageId } = req.params;
	if(!messageId) return res.status(400).send({ message: "Missing parameter."});
	const authenticatedId = req.information.id;
	try {
		const existMessage = await findThreadById(messageId, authenticatedId);
		if(existMessage.success === false) 
			return res.status(existMessage.code).send({ message: existMessage.message});
		if(!existMessage.data) 
			return res.status(404).send({ message: "Message not found."});

		let threadId = existMessage.data.thread_id;
		const userInThread = await findOnByAuthenticated(authenticatedId, threadId);
		if(userInThread.success == true && userInThread.code == 404)
			return res.status(401).send({ message: "Forbidden" });
		let removeMessage = await updateToDeleted(messageId, authenticatedId);
		return res.status(200).send({ message: removeMessage.message });
	} catch(error) {
		return res.status(500).send({ message: error.message });
	}
}

module.exports = { deleteMessage };