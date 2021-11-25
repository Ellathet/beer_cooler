const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saude')
		.setDescription('Antes de beber tem que ter um brind!'),
	async execute(interaction) {
		await interaction.reply('https://media.giphy.com/media/1woRElLgvpuJ70l3l1/giphy.gif');
	},
};