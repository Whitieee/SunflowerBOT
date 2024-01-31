import djs, { Collection } from "discord.js";
import Command from "./command";
import {Database} from "sqlite3";
class Client extends djs.Client {
  commands: Collection<string, Command>;
	db: Database;
  constructor(options: djs.ClientOptions | undefined = { intents: 3276799 }) {
    super(options);
    this.commands = new Collection();
		this.db = new Database('test.db');
  }
}

export default Client;
