const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  //360909768908472320 436963547864629248
  if(!message.author.id === '436963547864629248' ||
  !message.author.id === '360909768908472320') return message.reply(`<:SW_pandapolicia:767092860800991252> **»** Você não tem permissão para usar este comando.`)

  const { MessageEmbed } = require('discord.js');
  const { inspect } = require('util');
  const code = args.join(' ');
  if(code.search('token') != -1) return
  try {
    // eslint-disable-next-line no-eval
    const evaluated = await Promise.resolve(eval(code));

    message.channel.send(inspect(evaluated, { depth: 0 }), { code: 'js' });
  }
  catch (err) {
    const embed = new MessageEmbed()
      .setTitle('OOF')
      .setDescription('```' + err.stack + '```')
      .setColor('#c62b1d')
      .setTimestamp(new Date());

    message.channel.send({ embed });
  }
}