const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Mostra o ping!',
    async execute(client, message, args) {
        const { MessageEmbed } = require('discord.js');
        const clientping = new Date() - message.createdAt;
        const Embed = new MessageEmbed()
            .setTitle(':ping_pong:Pong')
            .addField(':robot:BOT: ', Math.floor(clientping) + 'ms')
            .addField(':desktop:API: ', Math.floor(client.ws.ping) + 'ms')
            .setColor('#181046');
        message.channel.send(Embed);
    },
};
