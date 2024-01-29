/* eslint-disable @typescript-eslint/no-explicit-any */
import { inspect } from "util";
import Command from "../utils/command";
import { devs } from "../config.json";
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
export default {
  data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Comando exclusivo para os desenvolvedores do bot")
    .addStringOption((option) =>
      option
        .setName("code")
        .setDescription("codigo para dar eval")
        .setRequired(true)
    ),
  aliases: ["e"],
  run: async (_client, message, args) => {
    if (!devs.includes(message.author.id))
      return await message.reply(
        `**»** Você não tem permissão para usar este comando.`
      );
    const code = args.join(" ");
    if (code.search("token") != -1) return;
    try {
      const evaluated = await Promise.resolve(eval(code));
      await message.channel.send(
        inspect(evaluated, {
          depth: 0,
        })
      );
    } catch (err: any) {
      const embed = new EmbedBuilder()
        .setTitle("OOF")
        .setDescription("```" + err.stack + "```")
        .setColor("#c62b1d")
        .setTimestamp(new Date());

      message.channel.send({
        embeds: [embed],
      });
    }
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (!devs.includes(interaction.user.id))
      return await interaction.reply(
        `**»** Você não tem permissão para usar este comando.`
      );
    const args = interaction.options.getString("code", true).split(" ");
    const code = args.join(" ");
    if (code.search("token") != -1) return;
    try {
      const evaluated = await Promise.resolve(eval(code));
      await interaction.reply(
        inspect(evaluated, {
          depth: 0,
        })
      );
    } catch (err: any) {
      const embed = new EmbedBuilder()
        .setTitle("OOF")
        .setDescription("```" + err.stack + "```")
        .setColor("#c62b1d")
        .setTimestamp(new Date());

      interaction.reply({
        embeds: [embed],
      });
    }
  },
} as Command;
