import {EmbedBuilder} from 'discord.js';
import Command from '../utils/command'

export default {
    name: 'ping',
    aliases: ['pong'],
		description: 'Mostra o ping!',
		run: async (client, message, _args) => {
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
} as Command;
