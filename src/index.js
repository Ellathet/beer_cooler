const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./utils/constants');
const fs = require('fs');
const storage = require('node-persist');

storage.init({
	dir: './src/data/storage',
	stringify: JSON.stringify,
	parse: JSON.parse,
	encoding: 'utf8',
	logging: false,
	ttl: false,
	expiredInterval: 2 * 60 * 1000,
	forgiveParseErrors: false,
}).then(() => {
	console.log('Storage has been initialized');
});

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);

