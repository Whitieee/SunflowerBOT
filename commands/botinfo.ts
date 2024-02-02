import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import Command from "../utils/command";
import Client from "../utils/client";
import {duration} from "moment";
export default {
  data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Mostra informações sobre o bot"),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
  run: async (_client, _message) => {
		return;
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const client = interaction.client as Client;
		const time = duration(client.uptime);
    const days = time.days();
    const hours = time.hours();
    const minutes = time.minutes();
    const seconds = time.seconds();
		const color = Math.random() * 0xffffff;
    const embed = new EmbedBuilder()
      .setColor(Math.round(color))
      .addFields({
        name: "<:777:1196155177724551178>» Criador:",
        value: "[Heikey](https://github/Heikey) & [Whiteee](https://twitter.com/11nsight)",
        inline: true,
      })
      .addFields({
        name: "<:5_:1196154623514390621>» Feito em:",
        value: "TypeScript e Node.js",
        inline: true,
      })
      .addFields({
        name: "<:88888:1196155629077794876>» Usuarios:",
        value: `${client.users.cache.size}`,
        inline: true,
      })
      .addFields({
        name: "<:66:1196154858504470669>» Comandos:",
        value: `${client.commands.size}`,
        inline: true,
      })
      .addFields({
        name: "<:44444:1196155484139442347>» **Ligado:**",
        value: `${days}:${hours}:${minutes}:${seconds}`,
        inline: true,
      })
      .addFields({
        name: "<:114:1196155359849615413>» Criado em:",
        value: interaction.client.application.createdAt.toLocaleDateString(),
        inline: true,
      })
      .setFooter({
        text:
          "Copyright ©️ 2024 " +
          client.user?.username +
          ". All Rights Reserved.",
      });
    await interaction.reply({ embeds: [embed] });
  },
} as Command;
