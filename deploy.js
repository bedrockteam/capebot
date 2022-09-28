require('dotenv').config()

const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

const commands = []
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env["TOKEN"]);

rest.put(Routes.applicationGuildCommands("721407517632233493", "1015710907415920671"), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application guild commands.`))
	.catch(console.error);

if (process.env["GLOBAL"] === "TRUE") {
  rest.put(Routes.applicationCommands("721407517632233493"), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);
}