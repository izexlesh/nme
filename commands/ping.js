module.exports = {
    name: "ping",
    aliases: ["ms"],
    run: async (client, message, args) => {
            message.channel.send('<:ping:820702530837151755> Pong! `'+client.ws.ping+'` ms.');
    }
}