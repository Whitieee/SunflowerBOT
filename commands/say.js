const Discord = require('discord.js');

/* module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando!**`)
  const sayMessage = args.join(' ');
  message.delete().catch(err => {});
  message.channel.send(sayMessage);

}; */
module.exports = {
  name: 'say',
  alisases: ['falar'],
  description: 'Faz o bot falar qualquer coisa!',

  async execute(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando!**`)
    const sayMessage = args.join(' ');
    message.delete().catch(err => {});
    message.channel.send(sayMessage);
  }
}; //para boceta
