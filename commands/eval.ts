import {inspect} from 'util';
import Command from '../utils/command'
import {devs} from '../config.json'
import {EmbedBuilder} from 'discord.js';
export default {
	name: 'eval',
	aliases: ['e'],
	description: 'Comando que apenas DEV\'s podem usar!',
	run: async (_client, message, args) => {
		if (!devs.includes(message.author.id))
			return await message.reply(`**»** Você não tem permissão para usar este comando.`)
		const code = args.join(' ');
		if(code.search('token') != -1) return;
		try {
			const evaluated = await Promise.resolve(eval(code));
			await message.channel.send(inspect(evaluated, {
				depth: 0,
			})) 
		} catch (err:any) {
			const embed = new EmbedBuilder()
				.setTitle('OOF')
				.setDescription('```' + err.stack + '```')
				.setColor('#c62b1d')
				.setTimestamp(new Date());

			message.channel.send({
				embeds:[embed]
			});
		}
	},

} as Command
