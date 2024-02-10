import { SlashCommandBuilder } from "discord.js";
import Command from "../utils/command";
import Client from "../utils/client";
export default {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Mostra o dinheiro de um certo usuario")
    .addUserOption((option) =>
      option.setName("usuario").setDescription("Usuario").setRequired(false)
    ),

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  run(_client, _message, _args) {
    return;
  },
  slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const user =
      interaction.options.getUser("usuario", false) || interaction.user;
    const db = (interaction.client as Client).db;
    db.get(
      "SELECT id id,money money FROM Users WHERE id = ?",
      user.id,
      async (err, row: { money: number }) => {
        if (err) return console.error(err);
        await interaction.reply(
          `O usuario ${user.displayName} tem ${row.money ? row : 0} dinheirinhos!`
        );
      }
    );
  },
} as Command;
