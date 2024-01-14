const config = require('../config')

module.exports = {
	name: 'eval',
	aliases: ['e'],
	description: 'Comando que apenas DEV\'s podem usar!',
	async execute(client, message, args) {
		if (!config.devs.includes(message.author.id))
			return await message.reply(`**»** Você não tem permissão para usar este comando.`)

		const {
			MessageEmbed
		} = require('discord.js');
		const {
			inspect
		} = require('util');
		const code = args.join(' ');
		if (code.search('token') != -1) return
		try {
			const evaluated = await Promise.resolve(eval(code));

			await message.channel.send(inspect(evaluated, {
				depth: 0
			}), {
				code: 'js'
			});
		} catch (err) {
			const embed = new MessageEmbed()
				.setTitle('OOF')
				.setDescription('```' + err.stack + '```')
				.setColor('#c62b1d')
				.setTimestamp(new Date());

			message.channel.send({
				embed
			});
		}
	}
}
