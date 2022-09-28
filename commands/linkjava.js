const { Client, CommandInteraction, SlashCommandBuilder } = require('discord.js');

/**
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
async function execute(client, interaction) {
	const username = interaction.options.getString('username');
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('linkjava')
		.setDescription('Allows you to link your Minecraft: Java Edition account to your Discord account!')
		.addStringOption(option => option.setName('username').setDescription('Your Minecraft: Java Edition username.').setRequired(true)),
	execute
};