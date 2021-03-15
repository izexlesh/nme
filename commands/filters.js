const Discord = require("discord.js")

module.exports = {
    name: "filter",
    aliases: ["filters"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(new Discord.MessageEmbed().setTitle("Commands").setDescription(`${client.emotes.error} | There is nothing in the queue right now!`).setTimestamp().setColor("#FF0000"))
        if (args[0] === "off" && queue.filter) client.distube.setFilter(message, queue.filter)
        else if (Object.keys(client.distube.filters).includes(args[0])) client.distube.setFilter(message, args[0])
        else if (args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("Commands").setDescription(`${client.emotes.error} | Not a valid filter`).setTimestamp().setColor("#FF0000"))
        message.channel.send(new Discord.MessageEmbed().setTitle("Filter error").setDescription(`Current Queue Filter: \`${queue.filter || "Off"}\``).setTimestamp().setColor("#FF0000"))
    }
}