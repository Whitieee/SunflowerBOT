import { EmbedBuilder, Message, SlashCommandBuilder } from "discord.js";
import Command from "../utils/command";
import Client from "../utils/client";

export default {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Mostra o avatar do usuario!")
    .addUserOption((option) => option.setName("usuario").setDescription('quem você quer beijar')),
  run: async (client: Client, message: Message, args: string[]) => {
    const user =
      message.mentions.users.first() ||
      client.users.cache.get(args[0]) ||
      message.author;

    const avatar = user.avatarURL({
      extension: "webp",
      size: 1024,
      forceStatic: true,
    });
    if (!avatar) return;
    const embed = new EmbedBuilder()
      .setColor(`#4cd8b2`)
      .setTitle(`@${user.tag}`)
      .setDescription(
        `Este é o avatar, **@${message.author.tag}**, fique a vontade e confira.`
      )
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
    const avatar = user.avatarURL({
      extension: "webp",
      size: 1024,
      forceStatic: true,
    });
    if (!avatar) return;
    const embed = new EmbedBuilder()
      .setColor(`#4cd8b2`)
      .setTitle(`@${user.tag}`)
      .setDescription(
        `Este é o avatar, **@${user.tag}**, fique a vontade e confira.`
      )
      .setImage(avatar)
      .setFooter({
        text: `• Autor: ${user.tag}`,
        iconURL: avatar,
      });
    await interaction.reply({ embeds: [embed] });
  },
} as Command;
