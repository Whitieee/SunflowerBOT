import {EmbedBuilder, SlashCommandBuilder} from 'discord.js';
import Command from '../utils/command'

export default {
		data: new SlashCommandBuilder()
							.setName('ping')
							.setDescription('pong'),
    aliases: ['pong'],
		run: async (client, message) => {
        const clientping = new Date().getTime() - message.createdAt.getTime();
        const embed = new EmbedBuilder()
            .setTitle(':ping_pong:Pong')
            .addFields({name:':robot:BOT: ',value: Math.floor(clientping) + 'ms'})
            .addFields({name:':desktop:API: ',value: Math.floor(client.ws.ping) + 'ms'})
            .setColor('#181046');
        await message.reply({
					embeds:[embed]
				})
		},
		slash_run: async (interaction) => {
			if(!interaction.isChatInputCommand()) return;
        const clientping = new Date().getTime() - interaction.createdAt.getTime();
        const embed = new EmbedBuilder()
            .setTitle(':ping_pong:Pong')
            .addFields({name:':robot:BOT: ',value: Math.floor(clientping) + 'ms'})
            .addFields({name:':desktop:API: ',value: Math.floor(interaction.client.ws.ping) + 'ms'})
            .setColor('#181046');
        await interaction.reply({
					embeds:[embed]
				})

		}
} as Command;
