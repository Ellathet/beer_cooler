const storage = require('node-persist');

async function commandChannelIsSet() {
	let isSet = false;

	const commandChannel = await storage.getItem('command_channel');

	console.log(await commandChannel);

	if (commandChannel) {
		isSet = true;
	}

	return (
		isSet
	);
}

async function isCommandChannel(channelId) {
	let isChannel = false;

	const commandChannel = await storage.getItem('command_channel');

	if (!commandChannel) {
		isChannel = true;
	}
	else if (channelId === commandChannel) {
		isChannel = true;
	}

	return (
		isChannel
	);
}


module.exports = commandChannelIsSet;
module.exports = isCommandChannel;