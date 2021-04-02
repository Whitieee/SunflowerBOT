const Discord = require('discord.js');

module.exports = {
    name: 'uptime',
    aliases: ['tempo'],
    description: 'Mostra o uptime do bot!',
    execute(client, message, args) {
        let totalSeconds = (client.uptime / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        message.channel.send(`:rage:|O bot está online a ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos!`);
    },
};