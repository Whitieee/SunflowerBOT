module.exports = {
    name: 'message',
    once: false,
    execute(client) {
        if (message.channel.type === 'dm') return;
        if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
        const role = message.member.roles.cache.some(r => config.rolesWithPerm.includes(r.id))
        if (config.blacklistedChannels.includes(message.channel.id) && !role)
            return message.reply(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando aqui!**`)
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
            //log de comando
            const embed = new Discord.MessageEmbed()
                .setColor("fff3f")
                .addField("<:certoooooooooo:767092932959797331>  **» Quem Utilizou:**", message.author.tag)
                .addField(`<:SW_pandapolicia:767092860800991252>  **» Canal**:`, `${message.channel.name}(${message.channel.id})`)
                .addField("<:staff:825830974088019968> » Mensagem Completa", `${message.content}`)
                .setFooter(new Date(message.createdTimestamp));
            message.guild.channels.cache.get('826152829412311081').send(embed);
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