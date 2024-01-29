import djs, { Collection } from "discord.js";
import Command from "./command";
class Client extends djs.Client {
  commands: Collection<string, Command>;
  constructor(options: djs.ClientOptions | undefined = { intents: 3276799 }) {
    super(options);
    this.commands = new Collection();
  }
}

export default Client;
