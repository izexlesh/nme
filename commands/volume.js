const Discord = require("discord.js")

module.exports = {
    name: "volume",
    aliases: ["v", "set", "set-volume"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | There is nothing in the queue right now!`).setTimestamp().setColor("#FF0000"))
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | Please enter a valid number!`).setTimestamp().setColor("#FF0000"))
        client.distube.setVolume(message, volume)
        message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.success} | Volume set to \`${volume}\``).setTimestamp().setColor("#FF0000"))
    }
}