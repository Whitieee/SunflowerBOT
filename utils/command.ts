import {Message} from "discord.js"
import Client from "./client"

class Command {
	name:string = ""
	aliases:string[] = []
	description:string = ""
	run!: (client:Client,message:Message,args:string[]) => void;
}

export default Command
