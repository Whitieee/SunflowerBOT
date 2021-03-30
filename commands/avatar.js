const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
  if(message.member.roles.cache.get(791132454307102791)||message.member.roles.cache.get(761573313150713907)||
  message.member.roles.cache.get(779231567817867284)||
  message.member.roles.cache.get(736758188908478505)||
  message.member.roles.cache.get(790032869459361792)
  ) return message.channel.send(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando nesse chat!`)
 // if(message.channel.id == "683525075709853748") return message.reply(``)
  
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor(`#4cd8b2`) 
    .setTitle(`@${user.tag} <:SW_suquinho:749472866009088001>`)
    .setDescription(`Este é o avatar, **@${message.author.tag}**, fique a vontade e confira.`) 
    .setImage(avatar) 
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 

};