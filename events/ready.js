module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const activities = [
            `Utilize ${process.env.PREFIX}help para obter ajuda`,
            `O Servidor crescer com muito amor e carinho !`,
            `O Whiteee e He1Korno me Progamar!`,
            `Os Usuários se divertindo no chat!`
        ];
        setInterval(() => client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, {
            type: "WATCHING"
        }), 1000 * 60);
        client.user
            .setStatus("dnd")
            .catch(console.error);
        console.log(`${client.user.tag} está online!`)
    }
}