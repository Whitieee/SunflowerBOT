import {duration} from 'moment';
import Command from '../utils/command'
import {SlashCommandBuilder} from 'discord.js';
export default {
	data: new SlashCommandBuilder()
						.setDescription('mostra a quanto tempo o bot está online')
						.setName('uptime'),
    aliases: ['tempo'],
		run: async(client, message) => {
        const totalSeconds = duration(client.uptime);
        const days = totalSeconds.days();
        const hours = totalSeconds.hours();
        const minutes = totalSeconds.minutes();
        const seconds = totalSeconds.seconds();
        message.channel.send(`**O ${client.user!.tag} está online a** ${days} **dias**, ${hours} **horas**, ${minutes} **minutos e** ${seconds} **segundos!** `);
		},
		slash_run:async (interaction) => {
			if(!interaction.isChatInputCommand()) return;	
			const client = interaction.client;
        const totalSeconds = duration(client.uptime);
        const days = totalSeconds.days();
        const hours = totalSeconds.hours();
        const minutes = totalSeconds.minutes();
        const seconds = totalSeconds.seconds();
        interaction.reply(`**O ${client.user!.tag} está online a** ${days} **dias**, ${hours} **horas**, ${minutes} **minutos e** ${seconds} **segundos!** `);
		},
} as Command;
