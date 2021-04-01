const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.channel.id == "683525075709853748") return message.reply(`<:SW_pandapolicia:767092860800991252> **»** **Você não tem permissão para usar este comando no bate-papo**`)
  message.delete();
  const content = args.join(" ");

  if (args.length < 1) {
    return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
  } else if (content.length > 1000) {
    return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
  } else {
    var canal = message.guild.channels.cache.get("825787133800349746");
    const msg = await canal.send(
      new Discord.MessageEmbed()
      .setColor("#00ff1f")
      .addField("<:staff:825830974088019968> **» Autor:**", message.author)
      .addField(" **<:eba:825833038151548938> » Conteúdo:**", content)
      .setFooter("ID do Autor: " + message.author.id)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
    );
    await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

    const emojis = ["✔️", "❎"];

    for (const i in emojis) {
      await msg.react(emojis[i])
    }
  }
}