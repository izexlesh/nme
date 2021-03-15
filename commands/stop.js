const Discord = require("discord.js")

module.exports = {
    name: "stop",
    aliases: ["disconnect", "leave"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | There is nothing in the queue right now!`).setTimestamp().setColor("#FF0000"))
        client.distube.stop(message)
        message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.success} | Stopped!`).setTimestamp().setColor("#FF0000"))
    }
}