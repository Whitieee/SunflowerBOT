import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import Command from "../utils/command";
export default {
  data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("Comando para você beijar seu BFF")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("quem você irá beijar")
        .setRequired(false)
    ),
  aliases: ["beijo"],
  run: async (client, message, args) => {
    const list = [
      "https://imgur.com/iclUiUN.gif",
      "https://imgur.com/lYQt9rx.gif",
      "https://imgur.com/w1TU5mR.gif",
      "https://i.imgur.com/sGVgr74.gif",
      "https://i.imgur.com/8LKPbOf.gif",
      "https://i.imgur.com/TItLfqh.gif",
      "https://i.imgur.com/YbNv10F.gif",
      "https://i.imgur.com/wQjUdnZ.gif",
      "https://i.imgur.com/lmY5soG.gif",
      "https://i.imgur.com/KLVAl0T.gif",
      "https://i.imgur.com/IgGumrf.gif",
      "https://i.imgur.com/KKAMPju.gif",
      "https://i.imgur.com/eKcWCgS.gif",
      "https://i.imgur.com/3aX4Qq2.gif",
      "https://i.imgur.com/uobBW9K.gif",
      "https://i.imgur.com/Esqtd1u.gif",
      "https://i.imgur.com/FozOXkB.gif",
      "https://i.imgur.com/B6UKulT.gif",
    ];

    const rand = list[Math.floor(Math.random() * list.length)];
    const user =
      message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
      return message.reply(
        "lembre-se de mencionar um usuário válido para beijar!"
      );
    }
    if (user == message.author)
      return message.reply("Você não pode se beijar!");
    const embed = new EmbedBuilder()
      .setTitle("Acabaram de se beijar, apaixonados!")
      .setColor("#9d00ff")
      .setDescription(`${message.author} acaba de beijar ${user}`)
      .setImage(rand)
      .setTimestamp();
    await message.reply({
      embeds: [embed],
    });
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const list = [
      "https://imgur.com/iclUiUN.gif",
      "https://imgur.com/lYQt9rx.gif",
      "https://imgur.com/w1TU5mR.gif",
      "https://i.imgur.com/sGVgr74.gif",
      "https://i.imgur.com/8LKPbOf.gif",
      "https://i.imgur.com/TItLfqh.gif",
      "https://i.imgur.com/YbNv10F.gif",
      "https://i.imgur.com/wQjUdnZ.gif",
      "https://i.imgur.com/lmY5soG.gif",
      "https://i.imgur.com/KLVAl0T.gif",
      "https://i.imgur.com/IgGumrf.gif",
      "https://i.imgur.com/KKAMPju.gif",
      "https://i.imgur.com/eKcWCgS.gif",
      "https://i.imgur.com/3aX4Qq2.gif",
      "https://i.imgur.com/uobBW9K.gif",
      "https://i.imgur.com/Esqtd1u.gif",
      "https://i.imgur.com/FozOXkB.gif",
      "https://i.imgur.com/B6UKulT.gif",
    ];

    const rand = list[Math.floor(Math.random() * list.length)];
    const user = interaction.options.getUser("usuario", false);
    if (!user) {
      return interaction.reply(
        "lembre-se de selecionar um usuário válido para beijar!"
      );
    }
    if (user == interaction.user)
      return interaction.reply("Você não pode se beijar!");
    const embed = new EmbedBuilder()
      .setTitle("Acabaram de se beijar, apaixonados!")
      .setColor("#9d00ff")
      .setDescription(`${interaction.member} acaba de beijar ${user}`)
      .setImage(rand)
      .setTimestamp();
    await interaction.reply({
      embeds: [embed],
    });
  },
} as Command;
