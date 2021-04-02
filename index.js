const express = require('express');
const fs = require('fs')
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`O arquivo ${command.name} foi carregado corretamente!`)
}
client.on('message', message => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
  const role = message.member.roles.cache.some( r => config.rolesWithPerm.includes(r.id))
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
      .setTitle("OwO")
      .setColor("fff3f")
      .setDescription("dicc")
      .addField("<:certoooooooooo:767092932959797331>  **» Quem Utilizou:**", message.author.tag)
      .addField(`no canal:`,`${message.channel.name}(${message.channel.id})`)
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
});

client.on("ready", () => {
  const activities = [
    `Utilize ${process.env.PREFIX}help para obter ajuda`,
    `O Servidor crescer rapidamente!`,
    `O Whiteee e He1Korno me Progamar!`,
    `Os Usuários se divertindo no chat!`
  ];
  setInterval(() => client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, {
    type: "WATCHING"
  }), 1000 * 60);
  client.user
    .setStatus("dnd")
    .catch(console.error);
  console.log(`${client.user.tag} está online!`)
});

client.login(process.env.TOKEN);