const { SlashCommandBuilder } = require('@discordjs/builders');
const storage = require('node-persist');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('set_command_channel')
		.setDescription('Setar um chat de commando')
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('ID do canal onde os comandos seram enviados')
				.setRequired(true)),
	async execute(interaction) {


		const channel = await interaction.options.getChannel('channel');

		await storage.setItem('command_channel', channel);

		await interaction.reply(`O canal ${channel.name}, foi setado como o de comando`);


	},
};