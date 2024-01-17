import {EmbedBuilder} from "discord.js";
import Command from "../utils/command"
export default {
	name: 'botinfo',
	aliases:[],
	description: "Mostra informações sobre mim!",
	run: async (client, message, _args) => {
		
        let totalSeconds = (client.uptime! / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const embed = new EmbedBuilder()
            .setColor(`#00e1ff`)
            .addFields({name:'» Criadores:',value:'[Heikey]() & [Whiteee]()',inline:true})
            .addFields({name:'» **Feito em:**',value:'JavaScript e Node.js',inline:true})
            .addFields({name:'» Usuarios:',value:`${client.users.cache.size}`,inline:true})
            .addFields({name:'» Comandos:',value:`${client.commands.size}`,inline:true})
            .addFields({name:'» **Ligado:**',value:`${days}:${hours}:${minutes}:${seconds}`,inline:true})
            .addFields({name:'» Prefixo:',value:`${process.env.PREFIX}`,inline:true})
            .addFields({name:'» **Criado em:**',value:new Date().getFullYear().toString(),inline:true})
            .setFooter({text:`Copyright ©️ 2024 ${client.user?.username}. All Rights Reserved.`});
            await message.reply({embeds:[embed]})
		
	},
} as Command;
