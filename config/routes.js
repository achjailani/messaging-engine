const router = require("express").Router();

const authValidation = require("../app/validations/auth");

const { basicRegistration } = require("../app/controllers/auth/register.js");
const { basicLogin } = require("../app/controllers/auth/login.js");
const { send } = require("../app/controllers/chat/send.js");
const { list } = require("../app/controllers/chat/list.js");
const { thread } = require("../app/controllers/chat/thread.js");
const { reply } = require("../app/controllers/chat/reply.js");

router.post("/register", authValidation.basicRegistration, basicRegistration);
router.post("/login", authValidation.basicLogin, basicLogin);
router.post("/messages/send/:userId", send);
router.get("/messages", list);
router.get("/messages/thread/:threadId", thread);
router.post("/messages/reply/:threadId", reply);

router.get("*", (req, res) => {
  res.status(404).send({
    error: "Not Found - Endpoint doesn't exists.",
  });
});
module.exports = router;
