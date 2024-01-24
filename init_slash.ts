/* eslint-disable @typescript-eslint/no-var-requires */
import { readdirSync } from "fs";
import Command from "./utils/command";
import { REST, Routes } from "discord.js";
import { config } from "dotenv";

config();

const commands = [];

const commands_folder = readdirSync("./commands/").filter((file) =>
  file.endsWith(".js")
);
for (const file of commands_folder) {
  const command = require(`./commands/${file}`).default as Command;
  if (command.slash_run) commands.push(command.data);
}
console.table(commands);

const rest = new REST().setToken(process.env.TOKEN!);
rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID!), {
    body: commands,
  })
  .then((e) => console.log(e))
  .catch((e) => console.error(e));
