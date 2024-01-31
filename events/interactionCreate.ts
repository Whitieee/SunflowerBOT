import {Interaction, PermissionFlagsBits} from 'discord.js';
import DiscordEvent from '../utils/event'
import Client from '../utils/client'
export default {
	name:'interactionCreate',
	once:false,
	execute: async (client:Client,interaction:Interaction) => {
		if(!interaction.memberPermissions?.has(PermissionFlagsBits.ManageMessages)) return;
		if(interaction.isChatInputCommand())
			client.commands.get(interaction.commandName)?.slash_run!(interaction)
	}

} as DiscordEvent; 
