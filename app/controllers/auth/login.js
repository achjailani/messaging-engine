const { User, Sequelize } = require('../../models');
const { validatePassword, generateToken } = require("../../utils/auth.js");
const Op = Sequelize.Op;

const basicLogin = (req, res) => {
	let { email, password } = req.body;
	User.findOne({ where: {[Op.or]: { email, phone: email}}})
	.then((user) => {
		if(user) {
			let correct = validatePassword(password, user.password);
			return correct 
				? res.status(200).send({
					name: user.fullname,
					email: user.email,
					accessToken: generateToken(user.id)
				})
				: res.status(400).send({
					message: "Password is incorrect."
				})
		}
		return res.status(400).send({
			message: "Email or Phone unrecognized."
		});
	})
	.catch((err) => {
		return res.status(500).send({
			message: "An error has accured while logging in.",
			error: err.message
		})
	})
}
