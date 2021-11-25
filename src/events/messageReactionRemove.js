const { welcomeMessageId } = require('../utils/constants');
const { emojiParser } = require('../utils/utilities');
const experiences = require('../data/experiences');

module.exports = {
	name: 'messageReactionRemove',
	async execute(reaction, user) {

		if (reaction.message.id === welcomeMessageId() && !user.bot) {

			const member = reaction.message.guild.members.cache.get(user.id);

			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.ae.emoji) {

				if (!member.roles.cache.has(experiences.ae.roleId)) {
					return;
				}
				else {member.roles.remove(experiences.ae.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.ps.emoji) {

				if (!member.roles.cache.has(experiences.ps.roleId)) {
					return;
				}
				else {member.roles.remove(experiences.ps.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.ai.emoji) {

				if (!member.roles.cache.has(experiences.ai.roleId)) {
					return;
				}
				else {member.roles.remove(experiences.ai.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.lr.emoji) {

				if (!member.roles.cache.has(experiences.lr.roleId)) {
					return;
				}
				else {member.roles.remove(experiences.lr.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.me.emoji) {

				if (!member.roles.cache.has(experiences.me.roleId)) {
					return;
				}
				else {member.roles.remove(experiences.me.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.pr.emoji) {

				if (!member.roles.cache.has(experiences.pr.roleId)) {
					return;
				}
				else {member.roles.remove(experiences.pr.roleId);}

			}

		}
	},
};