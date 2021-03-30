const Discord = require('discord.js');

exports.run = async (client, message, args) => {if(message.channel.id == "683525075709853748") return message.reply(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando no bate-papo**`)

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.imgur.com/sGVgr74.gif',
  'https://i.imgur.com/8LKPbOf.gif',
  'https://i.imgur.com/TItLfqh.gif',
  'https://i.imgur.com/YbNv10F.gif',
  'https://i.imgur.com/wQjUdnZ.gif',
  'https://i.imgur.com/lmY5soG.gif',
  'https://i.imgur.com/KLVAl0T.gif',
  'https://i.imgur.com/IgGumrf.gif',
  'https://i.imgur.com/KKAMPju.gif',
  'https://i.imgur.com/eKcWCgS.gif',
  'https://i.imgur.com/3aX4Qq2.gif',
  'https://i.imgur.com/uobBW9K.gif',
  'https://i.imgur.com/Esqtd1u.gif',
  'https://i.imgur.com/FozOXkB.gif',
  'https://i.imgur.com/B6UKulT.gif',

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Acabaram de se beijar, apaixonados!')
        .setColor('#9d00ff')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('h!kiss <usuario>')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}