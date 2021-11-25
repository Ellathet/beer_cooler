const dotenv = require('dotenv');
const storage = require('node-persist');

dotenv.config();

const token = process.env.BOT_TOKEN;
const publicKey = process.env.APP_PUBLIC_KEY;
const appId = process.env.APP_ID;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const welcomeMessageId = async () => await storage.getItem('welcome_message');

module.exports = {
	token,
	publicKey,
	appId,
	clientId,
	guildId,
	welcomeMessageId,
};