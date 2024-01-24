import {ChannelType, SlashCommandBuilder} from 'discord.js';
import Command from '../utils/command'
import Client from '../utils/client';
const prefix = process.env.PREFIX;
export default {
	data: new SlashCommandBuilder()
						.setName('help')
						.setDescription('Comando de ajuda sobre o bot')
						.addStringOption(option => option.setName('comando').setDescription('ajuda sobre um certo comando').setRequired(false)),
    aliases: ['ajuda'],
		run: async (client, message, args) => {
        const data = [];
				const commands = client.commands;
        if (!args.length) {
            data.push('Aqui está uma lista de todos os comandos disponiveis:');
            data.push(`**${commands.map(command => command.data?.name).join(', ')}**`);
            data.push(`\nUse  \`${prefix}help [Nome do comando]\` para saber oque tal comando faz!`);
            return message.author.send(data.join(''))
                .then(() => {
                    if (message.channel.type === ChannelType.DM) return;
                    message.reply('Eu mandei na sua DM uma mensagem de ajuda!');
                })
                .catch(error => {
                    console.error(`Não posso mandar mensagem na dm de ${message.author.tag}.\n`, error);
                    message.reply('Parece que não posso mandar mensagem pra você!');
                });
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        if (!command) return message.reply('Esse comando não existe!');
        data.push(`**Nome:** ${command.data?.name}`);
        if (command.aliases) data.push(`**pode ser usado como:** ${command.aliases.join(', ')}`);
        if (command.data?.description) data.push(`**Descrição:** ${command.data?.description}`);
        await message.channel.send(data.join(''))
		},
		slash_run: async (interaction) => {
			if(!interaction.isChatInputCommand()) return;
        const data = [];
				const client = interaction.client as Client
				const commands = client.commands;
				const args = interaction.options.getString('comando', false);
        if (!args?.length) {
            data.push('Aqui está uma lista de todos os comandos disponiveis:');
            data.push(`**${commands.map(command => command.data?.name).join(', ')}**`);
            data.push(`\nUse  \`${prefix}help [Nome do comando]\` para saber oque tal comando faz!`);
            return interaction.user.send(data.join(''))
                .then(() => {
                    if (interaction.channel?.type === ChannelType.DM) return;
                    interaction.reply('Eu mandei na sua DM uma mensagem de ajuda!');
                })
                .catch(error => {
                    console.error(`Não posso mandar mensagem na dm de ${interaction.user.tag}.\n`, error);
                    interaction.reply('Parece que não posso mandar mensagem pra você!');
                });
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        if (!command) return interaction.reply('Esse comando não existe!');
        data.push(`**Nome:** ${command.data?.name}`);
        if (command.aliases) data.push(`**pode ser usado como:** ${command.aliases.join(', ')}`);
        if (command.data?.description) data.push(`**Descrição:** ${command.data?.description}`);
        await interaction.channel?.send(data.join(''))
			
		},
} as Command;
