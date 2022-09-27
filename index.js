const { Client, GatewayIntentBits } = require('discord.js');
const Sequelize = require('sequelize');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
  console.log(commandName);
});

client.login(process.env["TOKEN"]);