const os = require('os')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "botinfo",
    aliases: [],
    description: "Mostra informações sobre mim!",
    async execute(client, message) {
        let totalSeconds = (client.uptime / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const embed = new MessageEmbed()
            .setColor(`#00e1ff`)
            .addField('» Criadores:','[Heikey]() & [Whiteee]()',true)
            .addField('» **Feito em:**','JavaScript e Node.js',true)
            .addField('» Usuarios:',`${client.users.cache.size}`,true)
            .addField('» Comandos:',`${client.commands.size}`,true)
            .addField('» **Ligado:**',`${days}:${hours}:${minutes}:${seconds}`,true)
            .addField('» Prefixo:',`${process.env.PREFIX}`,true)
            .addField('» **Criado em:**',`.`,true)
            .setFooter(`Copyright ©️ 2024 ${client.user.username}. All Rights Reserved.`)
            await message.reply(embed)

    }
}
