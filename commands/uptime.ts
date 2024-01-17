import Command from '../utils/command'
export default {
    name: 'uptime',
    aliases: ['tempo'],
    description: 'Mostra o uptime do bot!',
		run: async(client, message, args) => {
        let totalSeconds = (client.uptime! / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        message.channel.send(`**O ${client.user!.tag} está online a** ${days} **dias**, ${hours} **horas**, ${minutes} **minutos e** ${seconds} **segundos!** `);
		},
} as Command;
