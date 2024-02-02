import { APIEmbed, ActivityType, ChannelType } from "discord.js";
import Client from "../utils/client";
import DiscordEvent from "../utils/event";
export default {
  name: "ready",
  once: true,
  execute: async (client: Client) => {
    const activities = [
      `O servidor crescer com muito amor e carinho !`,
      `O Heikey me progamar!`,
      `Os usuários se divertindo no chat!`,
    ];

    const embeds: Partial<APIEmbed>[] = [
      {
        title:
          "<:Icons_rstaff:1202803245370708039> » **Como faço para me tornar STAFF**?",
        description:
          "Para iniciar sua jornada para **INGRESSAR** na **EQUIPE**, existem dois meios, o primeiro é através de formulários temporários que a equipe lança, ou seguir o **FIXADO** do canal <#1110268942330642443>.",
        color: 0x048af3,
      },
      {
        title: "<:100:1196155279927160962> » **Venha se tornar BOOSTER**!",
        description:
          "Impulsionando o servidor você ganha vários benefícios dentro do nosso **BOT**! além de poder usar comandos no <#1093492562041516123>. Gostou da ideia? Confira os outros benefícios em <#1140849499137392680>.",
        color: 0xe458ff,
      },
      {
        title: "🏆 » **Como ganhar o cargo de Melhores do Mês**?",
        description:
          "> Os **Melhores do Mês** são aqueles membros mais ativos do servidor, mas não desanime, é muito fácil conseguir esse cargo! basta conversar no <#1093492562041516123>, ou utilizar os canais de voz! que a cada mês selecionaremos os **MELHORES**!\n\n" +
          "**1**° **Lugar**: <@&1140313913368522763>.\n" +
          "**2**° & **3**° **Lugar**: <@&1140312229829415054>.\n" +
          "**4**° **Lugar**: <@&1140310603160879124>.\n\n" +
          "[Link da sua pontuação](https://statbot.net/dashboard/1093482890161045536/messages?avg[]=21&i=day&tu=hours&t=r&tp=day&tv=14&fu=t&fb=f).",
        color: 0xffeb00,
      },
    ];

    client.user?.setStatus("online");
    let counter = 0;

    setInterval(() => {
      client.user?.setActivity(
        `${activities[Math.floor(Math.random() * activities.length)]}`,
        { type: ActivityType.Watching }
      );
    }, 1000 * 60);
    console.log(client.user?.tag + " está online");

    setInterval(async () => {
      const channel = client.channels.cache.get("1093492562041516123")!;
      const guild_channel = await channel.fetch();
      if (guild_channel.type == ChannelType.GuildText) {
        const embed = embeds[counter++ % 3];
        guild_channel.send({ embeds: [embed] });
      }
    }, 30 * 60 * 1000);
  },
} as DiscordEvent;
