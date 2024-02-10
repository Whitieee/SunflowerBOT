/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChannelType, EmbedBuilder, Message } from "discord.js";
import Client from "../utils/client";
import DiscordEvent from "../utils/event";
import config from "../config.json";

export default {
  name: "messageCreate",
  once: false,
  execute: async (client: Client, message: Message) => {
    if (message.channel.type === ChannelType.DM) return;
    if (message.author.bot) return;
    client.db.run(
      `INSERT OR IGNORE INTO Users VALUES (${message.author.id},0,0)`
    );
    if (!message.content.startsWith(process.env.PREFIX!)) return;
    const role = message.member?.roles.cache.some((r) =>
      config.rolesWithPerm.includes(r.id)
    );
    if (!config.whitelistedChannels.includes(message.channel.id) && !role) {
      return message.reply(
        `**»** **Você não tem permissão para usar este comando aqui!**`
      );
    }
    const args = message.content.slice(process.env.PREFIX!.length).split(/ +/);
    const commandName = args.shift()!.toLowerCase();
    const command =
      client.commands.get(commandName!) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );
    if (!command) return;

    try {
      command.run(client, message, args);
    } catch (err: any) {
      console.error(err);
      const embed = new EmbedBuilder()
        .setTitle("OOF")
        .setDescription("```" + err.stack + "```")
        .setColor("#c62b1d")
        .setTimestamp(new Date());
      message.reply({ embeds: [embed] });
    }
  },
} as DiscordEvent;
