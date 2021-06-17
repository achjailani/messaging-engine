const router = require("express").Router();

const { basicRegistration } = require("../app/controllers/auth/register.js"); 

router.post("/register", basicRegistration);

router.get("*", (req, res) => {
	res.status(404).send({
		error: "Not Found - Endpoint doesn't exists."
	});
});
module.exports = router;