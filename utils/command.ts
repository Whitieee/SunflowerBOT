import { Interaction, Message, SlashCommandBuilder } from "discord.js";
import Client from "./client";

class Command {
  data?: Partial<SlashCommandBuilder>;
  aliases?: string[];
  run!: (client: Client, message: Message, args: string[]) => void;
  slash_run?: (interaction: Interaction) => void;
}

export default Command;
