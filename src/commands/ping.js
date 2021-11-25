const { SlashCommandBuilder } = require('@discordjs/builders');
const isCommandChannel = require('../validators/command_channel');
const storage = require('node-persist');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {

		const commandChannel = await storage.getItem('command_channel');

		if (commandChannel.id === interaction.channel.id) {
			console.log(interaction.channel.id);

			await interaction.reply('Pong!');
		}

	},
};