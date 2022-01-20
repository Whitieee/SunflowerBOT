const fs = require('fs');
const app = require('./utils/Site')
require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`O arquivo ${command.name} foi carregado corretamente!`)
}

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, async (...args) => event.execute(client,...args));
	} else {
		client.on(event.name, async (...args) => event.execute(client,...args));
	}
}


client.login(process.env.TOKEN);