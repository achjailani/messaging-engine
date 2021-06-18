"use strict";

const { findById } = require("../../services/thread.service.js");
const ThreadService = require("../../services/thread.service.js");
const MessageService = require("../../services/message.service.js");

const reply = async (req, res) => {
	let { threadId } = req.params;
	let { message } = req.body;
	let senderId = 12; 
	if(!threadId) {
		return res.status(400).send({ message: "Missing parameter."});
	}
	try {
		let response = await findById(threadId);
		if(response.code === 404) {
			return res.status(404).send({message: response.message});
		}
		response = response.data;
		const definedMessage = {
	      thread_id: response.id,
	      sender_id: senderId,
	      message: message,
	    };
		const createMessage = await MessageService.createOne(definedMessage);
	    await ThreadService.updateDatetime(response.id);
	    return res.status(201).send({ message: createMessage.message });
	} catch(error) {
		return res.status(500).send({message: error.message});
	}
}

module.exports = { reply };