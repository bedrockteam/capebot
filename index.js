require('dotenv').config()

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const Sequelize = require('sequelize');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
});

client.login(process.env["TOKEN"]);