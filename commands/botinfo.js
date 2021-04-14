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

            .setColor(`#00e1ff`)
            .setThumbnail('https://cdn.discordapp.com/avatars/664854758636519474/7892aca4ddc6d0257bb530d57b3dae86.png?size=2048')
            .addField('<a:palmas:827926682517766204> » Criadores:','[He1korno](https://twitter.com/heikorninkkj) & [Whiteee](https://twitter.com/itsnotcloud)',true)
            .addField('<:partner_azul:825925331785482291> » **Feito em:**','JavaScript e Node.js',true)
            .addField('<:espera:827708648167047179> » Usuarios:',`${client.users.cache.size}`,true)
            .addField('<a:carregando:827925429209530451> » Comandos:',`${client.commands.size}`,true)
            .addField('<a:uque:827926502942965812> » **Ligado:**',`${days}:${hours}:${minutes}:${seconds}`,true)
            .addField('<a:nice:827926205863821312> » Prefixo:',`${process.env.PREFIX}`,true)
            .addField('<a:wampus_boost:827927714354561054> » **Criado em:**',`9 de Janeiro de 2020 ás 15:35.`,true)
            .setFooter(`Copyright ©️ 2020 ${client.user.username}. All Rights Reserved.`)
            message.reply(embed)

    }
}