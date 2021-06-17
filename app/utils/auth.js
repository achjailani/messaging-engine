const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const hashPassword = async(password) => {
	return await bcrypt.hashSync(password, 8);
};

const validatePassword = (password, hashed) => {
	return bcrypt.compareSync(password, hashed);
};

const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.APP_SECRET, {
		expiresIn: "1d"
	});
};

module.exports = {
	hashPassword,
	validatePassword,
	generateToken
}