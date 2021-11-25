const { welcomeMessageId } = require('../utils/constants');
const { emojiParser } = require('../utils/utilities');
const experiences = require('../data/experiences');

module.exports = {
	name: 'messageReactionAdd',
	async execute(reaction, user) {

		if (reaction.message.id === welcomeMessageId && !user.bot) {

			const member = reaction.message.guild.members.cache.get(user.id);

			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.ae.emoji) {

				if (member.roles.cache.has(experiences.ae.roleId)) {
					return;
				}
				else {member.roles.add(experiences.ae.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.ps.emoji) {

				if (member.roles.cache.has(experiences.ps.roleId)) {
					return;
				}
				else {member.roles.add(experiences.ps.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.ai.emoji) {

				if (member.roles.cache.has(experiences.ai.roleId)) {
					return;
				}
				else {member.roles.add(experiences.ai.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.lr.emoji) {

				if (member.roles.cache.has(experiences.lr.roleId)) {
					return;
				}
				else {member.roles.add(experiences.lr.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.me.emoji) {

				if (member.roles.cache.has(experiences.me.roleId)) {
					return;
				}
				else {member.roles.add(experiences.me.roleId);}
			}
			if (emojiParser(reaction.emoji.id, reaction.emoji.name) === experiences.pr.emoji) {

				if (member.roles.cache.has(experiences.pr.roleId)) {
					member.roles.remove(experiences.pr.roleId);
				}
				else {member.roles.add(experiences.pr.roleId);}

			}

		}
	},
};