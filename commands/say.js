const Discord = require('discord.js');

module.exports = {
  name: 'say',
  alisases: ['falar'],
  description: 'Faz o bot falar qualquer coisa!',

  async execute(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando!**`)
    if (args[0] === "json") {
      args.shift();
      const embed = new Discord.MessageEmbed(JSON.parse(args.join(" ")));
      await message.delete()
      await message.channel.send(embed)

    } else {
      const sayMessage = args.join(' ');
      await message.delete()
      await message.channel.send(sayMessage);
    }
  }
};