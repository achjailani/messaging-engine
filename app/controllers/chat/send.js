"use strict";

const UserService = require("../../services/user.service.js");
const ThreadService = require("../../services/thread.service.js");
const MessageService = require("../../services/message.service.js");

const send = async (req, res) => {
  let { userId } = req.params;
  let { message } = req.body;
  try {
    let user = await UserService.findOne(userId);
    let thread = await ThreadService.findOne([userId, 4]);
    if (user.code === 404) {
      return res.status(user.code).send(user.message);
    }
    if (thread.code === 404) {
      await ThreadService.createOne({ creator_id: 4, recipient_id: userId });
      const latestThread = await ThreadService.findOne([userId, 4]);
      await MessageService.createOne({
        thread_id: latestThread.data.id, sender_id: 4, message: message
      });
      return res
        .status(201)
        .send({ message: "New conversation has been created." });
    }
    const definedMessage = {
      thread_id: thread.data.id,
      sender_id: 4,
      message: message,
    };
    const createMessage = await MessageService.createOne(definedMessage);
    await ThreadService.updateDatetime(thread.id);
    return res.status(201).send({ message: createMessage.message });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { send };
