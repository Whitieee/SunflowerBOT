import { ActivityType } from "discord.js";
import Client from "../utils/client";
import DiscordEvent from "../utils/event";
export default {
  name: "ready",
  once: true,
  execute: async (client: Client) => {
    const activities = [
      `Utilize ${process.env.PREFIX}help para obter ajuda`,
      `O Servidor cresce como muito amor e carinho !`,
      `O Whiteee e Heikey me Progamar!`,
      `Os Usuários se divertindo no chat!`,
    ];

    client.user?.setStatus("online");

    setInterval(() => {
      client.user?.setActivity(
        `${activities[Math.floor(Math.random() * activities.length)]}`,
        { type: ActivityType.Watching }
      );
    }, 1000 * 60);
    console.log(`${client.user?.tag} está online`);
  },
} as DiscordEvent;
