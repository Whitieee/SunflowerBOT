import {EmbedBuilder, PermissionFlagsBits} from 'discord.js';
import Command from '../utils/command'
export default {
  name: 'say',
  aliases: ['falar'],
  description: 'Faz o bot falar qualquer coisa!',
	run: async (_client, message, args) => {
    if (!message.member?.permissions.has(PermissionFlagsBits.ManageMessages))
      return message.reply(`**»** **Você não tem permissão para usar este comando!**`)
    if (args[0] === "json") {
      args.shift();
      const embed = new EmbedBuilder(JSON.parse(args.join(" ")));
      await message.delete()
      await message.channel.send({
				embeds:[embed]
			})

    } else {
      const sayMessage = args.join(' ');
      await message.delete()
      await message.channel.send(sayMessage);
    }
	},
} as Command;
