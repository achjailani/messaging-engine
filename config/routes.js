const router = require("express").Router();

const authValidation = require("../app/validations/auth");
const chatValidation = require("../app/validations/chat");

const { decode } = require("../app/middleware/auth");
const { basicRegistration } = require("../app/controllers/auth/register.js");
const { basicLogin } = require("../app/controllers/auth/login.js");
const { send } = require("../app/controllers/chat/send.js");
const { list } = require("../app/controllers/chat/list.js");
const { thread } = require("../app/controllers/chat/thread.js");
const { reply } = require("../app/controllers/chat/reply.js");

const user = require("../app/controllers/user");

router.post("/register", authValidation.basicRegistration, basicRegistration);
router.post("/login", authValidation.basicLogin, basicLogin);
router.get("/users", decode, user.getAll);
router.post(
  "/messages/send/:userId",
  decode,
  chatValidation.sendValidator,
  send
);
router.get("/messages", decode, list);
router.get("/messages/thread/:threadId", decode, thread);
router.post(
  "/messages/reply/:threadId",
  chatValidation.sendValidator,
  decode,
  reply
);

router.get("*", (req, res) => {
  res.status(404).send({
    error: "Not Found - Endpoint doesn't exists.",
  });
});
module.exports = router;
