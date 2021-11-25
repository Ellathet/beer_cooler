const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome_message')
		.setDescription('Cria a messagem de bem vindo')
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('ID do canal onde a messagem seja enviada')
				.setRequired(true)),
	async execute(interaction) {

		const welcomeEmbed = new MessageEmbed()
			.setColor('#0B2AC9')
			.setTitle('Experiências disponíveis')
			.setDescription(`Você já é um bebum, basta só definir o que você aprecia de melhor. 
      \nPara selecionar basta reagir a esse mansagem de acordo com a experiência escolhida. E claro, você pode escolher mais de uma`)
			.setFields(
				{ name: 'Reaja com as opções escolhidas', value:`
        \nAfter Effects — <:ae:913277984067158066>
        \nPhotoshop — <:ps:913277983408672768>
        \nIlustrator — <:ai:913277983438037042>
        \nLightroom — <:lr:913277981311529021>
        \nMedia Enconder — <:me:913277983513538631>
        \nPremiere — <:pr:913277981944848399>
        \nLevantamento de copo — 🍺` },
			);


		const channel = interaction.options.getChannel('channel');

		const message = await channel.send({ embeds: [welcomeEmbed] });

		message.react('<:ae:913277984067158066>');
		message.react('<:ps:913277983408672768>');
		message.react('<:ai:913277983438037042>');
		message.react('<:lr:913277981311529021>');
		message.react('<:me:913277983513538631>');
		message.react('<:pr:913277981944848399>');

		await interaction.reply(`Sua mensagem foi criada no canal: ${channel.name}!`);
	},
};