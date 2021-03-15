const Discord = require("discord.js")

module.exports = {
    name: "skip",
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | There is nothing in the queue right now!`).setTimestamp().setColor("#FF0000"))
        try {
            client.distube.skip(message)
            message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.success} | Skipped! Now playing:\n${queue.songs[0].name}`).setTimestamp().setColor("#FF0000"))
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | ${e}`).setTimestamp().setColor("#FF0000"))
        }
    }
}