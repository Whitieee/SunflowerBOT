import {readdirSync} from "fs";
import Client from "./utils/client";

import { config } from "dotenv";
config();
let client = new Client();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
	const command = require(`./commands/${file}`).default;
	console.log(command);
	client.commands.set(command.name, command)
	console.log(`O arquivo ${command.name} foi carregado corretamente!`);
}

const events = readdirSync('./events').filter(file => file.endsWith('.js'));

for(const file of events) {
	const event = require(`./events/${file}`).default;
	if(event.once) {
		client.once(event.name, async (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name,async (...args) => event.execute(client, ...args));
	}
}

client.login(process.env.TOKEN);
