const { User, Sequelize } = require('../../models');
const { hashPassword, generateToken } = require("../../utils/auth.js");
const Op = Sequelize.Op;

const basicRegistration = (req, res) => {
	const { fullname, email, phone, password } = req.body;
	User.findAndCountAll({ where: { [Op.or]: { email, phone } }})
	.then(async (duplicate) => {
		if(duplicate.count > 0) {
			return res
			.status(422)
			.send({ message : "Email or Phone already registered."});
		}
		req.body.password = await hashPassword(password);
		User.create({...req.body})
		.then((user) => {
			return res.status(201).send({
				message: "Registered successfully",
				data: {
					name: user.fullname,
					email: user.email,
					accessToken: generateToken(user.id)
				}
			});
		})
		.catch((error) => {
			return res.status(500).send({
				message: "An error has accured while registering",
				error: error.message
			});
		});
	})
	.catch((err) => {
		return res.status(500).send({
			message: "An error has accured while checking existing user",
			error: err.message
		})
	});
}

module.exports = {
	basicRegistration
}