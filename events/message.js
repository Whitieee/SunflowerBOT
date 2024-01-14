const config = require('../config.json');
const Discord = require("discord.js");
module.exports = {
    name: 'message',
    once: false,
    async execute(client, message) {
        if (message.channel.type === 'dm') return;
        if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
        // system of roles with perm to send message in blacklisted channels
        const role = message.member.roles.cache.some(r => config.rolesWithPerm.includes(r.id))
        if (config.blacklistedChannels.includes(message.channel.id) && !role)
            return message.reply(`**»** **Você não tem permissão para usar este comando aqui!**`)
        if (!message.content.startsWith(process.env.PREFIX.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        const args = message.content
            .slice(process.env.PREFIX.length)
            .split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
            client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;
        try {
            command.execute(client, message, args);
        } catch (err) {
            console.error('Erro:' + err);
            const embed = new Discord.MessageEmbed()
                .setTitle('OOF')
                .setDescription('```' + err.stack + '```')
                .setColor('#c62b1d')
                .setTimestamp(new Date());
            message.channel.send(embed);
        }
    },
};
