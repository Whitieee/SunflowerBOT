import {EmbedBuilder} from "discord.js";
import Command from "../utils/command";

export default {
	name: 'avatar',
	aliases: [],
	description:'Mostra o avatar do usuario!',
	run: async (client, message, args) => {
		let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

		let avatar = user.avatarURL({
			extension: 'webp',
			size: 1024,
			forceStatic:true,
		});
		if(!avatar) return;
		let embed = new EmbedBuilder()
			.setColor(`#4cd8b2`)
			.setTitle(`@${user.tag}`)
			.setDescription(`Este é o avatar, **@${message.author.tag}**, fique a vontade e confira.`)
			.setImage(avatar)
			.setFooter({ text:`• Autor: ${message.author.tag}`,
									iconURL: avatar,
			});
		await message.reply({embeds:[embed]});
		
	}
} as Command;
