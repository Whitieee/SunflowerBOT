import {SlashCommandBuilder} from "discord.js";
import Command from "../utils/command";
import Client from "../utils/client";

export default {
	data: new SlashCommandBuilder()
						.setName("daily")
						.setDescription("Use para ganhar dinheiro uma vez por dia"),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	run(_client, _message, _args) {
		return;
	},
	slash_run: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
		const db = (interaction.client as Client).db;
		const user_id = interaction.member?.user.id;
		db.get("SELECT id, daily_timestamp, money FROM Users WHERE id = ?;", user_id, async (err,row:{money: number,daily_timestamp:EpochTimeStamp}) => {
			if(err) return console.error(err);
			const time_sub = Date.now().valueOf() - new Date(row.daily_timestamp).valueOf();
			if(time_sub > 1000*60*60*24) {
				const new_money = row.money + 1000; 
				db.run("UPDATE Users SET daily_timestamp = ?, money = ? WHERE id = ?;", Date.now().valueOf(), new_money, user_id);
				await interaction.reply(`${new_money}`);
			} else {
				interaction.reply("sai dai");
			}
		});
	},
} as Command;
