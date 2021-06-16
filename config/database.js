require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DEV_DB_USER,
		password: process.env.DEV_DB_PASS,
		database: process.env.DEV_DB_NAME,
		host: process.env.DEV_DB_HOST,
		port: process.env.DEV_DB_PORT,
		dialect: process.env.DEV_DB_DIALECT
	},
	production: {
		username: process.env.PROD_DB_USER,
		password: process.env.PROD_DB_PASS,
		database: process.env.PROD_DB_NAME,
		host: process.env.PROD_DB_HOST,
		port: process.env.PROD_DB_PORT,
		dialect: process.env.PROD_DB_DIALECT
	},
}

