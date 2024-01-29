import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import Command from "../utils/command";
export default {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Comando exclusivo para a staff")
    .addStringOption((option) =>
      option
        .setName("message")
        .setRequired(true)
        .setDescription("a mensagem a ser dita")
    ),
  aliases: ["falar"],
  run: async (_client, message, args) => {
    if (!message.member?.permissions.has(PermissionFlagsBits.ManageMessages))
      return message.reply(
        `**»** **Você não tem permissão para usar este comando!**`
      );
    const sayMessage = args.join(" ");
    await message.delete();
    await message.channel.send(sayMessage);
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.ManageMessages))
      return interaction.reply(
        `**»** **Você não tem permissão para usar este comando!**`
      );
    const sayMessage = interaction.options.getString("message", true);
    await interaction.channel?.send(sayMessage);
  },
} as Command;
