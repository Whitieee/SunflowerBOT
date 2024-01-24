class DiscordEvent {
	name?:string
	once?:boolean
	execute?:(...args:unknown[]) => void; 
}

export default DiscordEvent
