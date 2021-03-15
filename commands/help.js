const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["h", "cmd", "command"],
    run: async (client, message, args) => {
    const embedyardim = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setAuthor(`${client.user.username} `, client.user.avatarURL()) 
      .setDescription('**>help** You can get help with.\n sample command usage: **>play**.\ninvite our bots **>invitation**')
      .addField('** ❯ Music Commands (9)**', `Music commands that anyone can use. \n` +  '`play`, `pause`, `resume`, `skip`, `stop`, `volume`, `queue`, `repeat`, `filter`')
      .addField('** ❯ Filters Commands (6)**',   `Music filter commands that anyone can use. \n` + '`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`')
      .addField('** Other Commands (3)**',`Common commands that anyone can use. \n` +  '`stats`, `ping`, `invite`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embedyardim).catch()

    }
}

