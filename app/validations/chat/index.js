"use strict";

let Validator = require("validatorjs");

module.exports = {
  sendValidator: async (req, res, next) => {
    try {
      const validation = new Validator(
        { ...req.body },
        {
          message: "required|string",
        }
      );
      if (validation.fails()) {
        return res.status(422).send({ ...validation.errors });
      }
      next();
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
};
