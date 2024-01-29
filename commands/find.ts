import { PermissionsBitField, SlashCommandBuilder } from "discord.js";
import Command from "../utils/command";

export default {
  data: new SlashCommandBuilder()
    .setName("find")
    .setDescription("Comando exclusivo para a staff")
    .addStringOption((option) =>
      option.setName("query").setRequired(true).setDescription("nome do moço")
    ),
  aliases: [],
  run: async (_client, message, args) => {
    const author = message.member;
    if (!author?.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return await message.reply(
        "Você não tem permissão para usar esse comando"
      );
    const user_find = message.guild?.members.cache.find((m) =>
      m.nickname?.includes(args[0])
    );
    if (user_find) return await message.reply(user_find?.id);
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const author = interaction.memberPermissions;
    if (!author?.has(PermissionsBitField.Flags.ManageMessages))
      return await interaction.reply(
        "Você não tem permissão para usar esse comando"
      );
    const args = interaction.options.getString("query", true).split(" ");
    const user_find = interaction.guild?.members.cache.find((m) =>
      m.nickname?.includes(args[0])
    );
    if (user_find) return await interaction.reply(user_find?.id);
  },
} as Command;
