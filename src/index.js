const { Client, Intents } = require('discord.js');
const { token } = require('./utils/constants');

console.log(token);

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Server is Ready!');
});

client.login(token);