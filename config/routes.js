const router = require("express").Router();

const { basicRegistration } = require("../app/controllers/auth/register.js");
const { send } = require("../app/controllers/chat/send.js");
const { list } = require("../app/controllers/chat/list.js");
const { thread } = require("../app/controllers/chat/thread.js");

router.post("/register", basicRegistration);
router.post("/messages/send/:userId", send);
router.get("/messages", list);
router.get("/messages/thread/:threadId", thread);

router.get("*", (req, res) => {
  res.status(404).send({
    error: "Not Found - Endpoint doesn't exists.",
  });
});
module.exports = router;
