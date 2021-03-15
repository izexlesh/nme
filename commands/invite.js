const Discord = require("discord.js")

module.exports = {
    name: "invite",
    aliases: ["invitation"],
    run: async (client, message, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor(`Wiggles Invitation`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField(
      "<:Invite:821017959488028684> Bot Invite Link",
      `Add Our Bot to the Server! [Click](https://discord.com/oauth2/authorize?client_id=781054130613518357&scope=bot&permissions=805314622)`
    )
    .setFooter(`Wiggles Invitation Menu`, client.user.avatarURL());
   message.channel.send(yardım).catch()

    }
}