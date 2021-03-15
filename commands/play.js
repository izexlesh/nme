const Discord = require("discord.js")

module.exports = {
    name: "play",
    aliases: ["p"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const string = args.join(" ")
        if (!string) return message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | Please enter a song url or query to search.`).setTimestamp().setColor("#FF0000"))
        try {
            client.distube.play(message, string)
        } catch (e) {
            message.channel.send(new Discord.MessageEmbed().setDescription(`${client.emotes.error} | Error: \`${e}\``).setTimestamp().setColor("#FF0000"))
        }
    }
}