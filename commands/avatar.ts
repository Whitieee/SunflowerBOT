import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import Command from "../utils/command";
import Client from "../utils/client";

export default {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Mostra o avatar do usuario!")
    .addUserOption((option) =>
      option.setName("usuario").setDescription("Usuario")
    ),
  run: async (client: Client, message: Message, args: string[]) => {
    const user =
      message.mentions.users.first() ||
      client.users.cache.get(args[0]) ||
      message.author;

    const avatar = user.avatarURL({
      extension: user.avatar?.endsWith(".gf") ? "gif" : "png",
      size: 1024,
      forceStatic: true,
    });
    if (!avatar) return;
    const embed = new EmbedBuilder()
      .setColor(`#4cd8b2`)
      .setTitle(`@${user.tag}`)
      .setImage(avatar)
      .setFooter({
        text: `• Autor: ${message.author.tag}`,
        iconURL: avatar,
      });
    await message.reply({ embeds: [embed] });
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const user = interaction.options.getUser("usuario") || interaction.user;

    const avatar_author = interaction.user.avatarURL({
      extension: user.avatar?.endsWith(".gf") ? "gif" : "png",
      size: 1024,
    });
    const avatar = user.avatarURL({
      extension: user.avatar?.endsWith(".gf") ? "gif" : "png",
      size: 1024,
    });
    if (!avatar) return;
    const embed = new EmbedBuilder()
      .setColor(`#4cd8b2`)
      .setTitle(`@${user.tag}`)
      .setImage(avatar)
      .setFooter({
        text: `• Autor: ${interaction.user.tag}`,
        iconURL: avatar_author!,
      });
    const download_button = new ButtonBuilder()
      .setLabel("Clique aqui para baixar a imagem")
      .setURL(avatar)
      .setStyle(ButtonStyle.Link);
    const row = new ActionRowBuilder<ButtonBuilder>().setComponents(
      download_button
    );
    await interaction.reply({ embeds: [embed], components: [row] });
  },
} as Command;
