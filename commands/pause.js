const Discord = require("discord.js")

module.exports = {
    name: "pause",
    aliases: ["pause", "hold"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | There is nothing in the queue right now!`).setTimestamp().setColor("#FF0000"))
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send(new Discord.MessageEmbed().setDescription("Resumed the song for you :)").setTimestamp().setcolor("#FF0000"))
        }
        client.distube.pause(message)
        message.channel.send(new Discord.MessageEmbed().setDescription("Paused the song for you :)").setTimestamp().setColor("#FF0000"))
    }
}