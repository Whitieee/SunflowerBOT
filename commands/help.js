const prefix = process.env.PREFIX;

module.exports = {
    name: 'help',
    description: 'Mostra informações de um comando ou então mostra todos os comandos.',
    aliases: ['comandos'],
    execute(client, message, args) {
        const data = [];
        const { commands } = client;

        if (!args.length) {
            data.push('Aqui está uma lista de todos os comandos disponiveis:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nUse  \`${prefix}help [Nome do comando]\` para saber oque tal comando faz!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Eu mandei na sua DM uma mensagem de ajuda!');
                })
                .catch(error => {
                    console.error(`Não posso mandar mensagem na dm de ${message.author.tag}.\n`, error);
                    message.reply('Parece que não posso mandar mensagem pra você!');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) return message.reply('Isso não é um comando valido');
        

        data.push(`**Nome:** ${command.name}`);

        if (command.aliases) data.push(`**pode ser usado como:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Descrição:** ${command.description}`);
        //if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);


        message.channel.send(data, { split: true });
    },
};