"use strict";

const UserService = require("../../services/user.service.js");
const ThreadService = require("../../services/thread.service.js");
const MessageService = require("../../services/message.service.js");

/**
 * Send message if thread exists, if noot, it will
 * create new thread ( conversation ) and new message
 */
const send = async (req, res) => {
  let { userId } = req.params;
  let { message } = req.body;
  let creator_id = req.information.id;
  try {
    let user = await UserService.findOne(userId);
    let thread = await ThreadService.findOne([userId, creator_id]);
    if (user.code === 404) {
      return res.status(user.code).send(user.message);
    }
    if (thread.code === 404) {
      await ThreadService.createOne({
        creator_id: creator_id,
        recipient_id: userId,
      });
      const latestThread = await ThreadService.findOne([userId, creator_id]);
      await MessageService.createOne({
        thread_id: latestThread.data.id,
        sender_id: creator_id,
        message: message,
      });
      return res
        .status(201)
        .send({ message: "New conversation has been created." });
    }
    const definedMessage = {
      thread_id: thread.data.id,
      sender_id: creator_id,
      message: message,
    };
    const createMessage = await MessageService.createOne(definedMessage);
    await ThreadService.updateDatetime(thread.data.id);
    return res.status(201).send({ message: createMessage.message });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { send };
