const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  return await bcrypt.hashSync(password, 8);
};

const validatePassword = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
};

module.exports = {
  hashPassword,
  validatePassword,
};
