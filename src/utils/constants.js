const dotenv = require('dotenv');

dotenv.config();

const token = process.env.BOT_TOKEN;
const publicKey = process.env.APP_PUBLIC_KEY;
const appId = process.env.APP_ID;

module.exports = {
	token,
	publicKey,
	appId,
};