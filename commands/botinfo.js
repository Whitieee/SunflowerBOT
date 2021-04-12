const os = require('os')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "botinfo",
    aliases: [],
    description: "Mostra informações sobre mim!",
    execute(client, message, args) {
        let totalSeconds = (client.uptime / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const embed = new MessageEmbed()
            .addField('Criadores','He1korno#9932 e Whiteee#8393',true)
            .addField('Feito em','JavaScript e Node.js',true)
            .addField('Usuarios',`${client.users.cache.size}`)
            .addField('Comandos',`${client.commands.size}`)
            .addField('Ligado a',`${days}:${hours}:${minutes}:${seconds}`,true)
            .addField('Prefixo',`${process.env.PREFIX}`,true)
            .addField('Criado em',`client.user.createdAt`)
            .setFooter(`©️ ${client.user.username}`)
            message.reply(embed)

    }
}