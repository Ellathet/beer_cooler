const dotenv = require('dotenv');

dotenv.config();

const token = process.env.BOT_TOKEN;
const publicKey = process.env.APP_PUBLIC_KEY;
const appId = process.env.APP_ID;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const welcomeMessageId = process.env.WELCOME_MESSAGE_ID;

module.exports = {
	token,
	publicKey,
	appId,
	clientId,
	guildId,
	welcomeMessageId,
};