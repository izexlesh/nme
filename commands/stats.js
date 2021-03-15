const Discord = require("discord.js")
const moment = require("moment");
const distube = require("distube")

module.exports = {
    name: "stats",
    aliases: ["stat","statistics"],
    run: async (client, message, args) => {
            require('moment-duration-format');
var os = require('os')
let iş = os.cpus()[0]

return message.channel.send(new Discord.MessageEmbed()
.setColor("#FF0000")
.setTimestamp()
.setAuthor(client.user.username+' | Stats', client.user.avatarURL())
.addField('<:Latency:820808963909746700> ❯ Latency', client.ws.ping+'ms.', true)
.addField('<:Uptime:820807356376023070> ❯ Uptime', moment.duration(client.uptime).format(`w [weeks] d [days] h [hours] m [minutes] s [seconds]`), true)
.addField('<:Users:820807626383687703> ❯ Users' ,client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("<:Servers:820807806659198978> ❯ Server", client.guilds.cache.size.toLocaleString(), true)
.addField("<:Channels:820808691984236584> ❯ Channels", client.channels.cache.size.toLocaleString(), true)
.addField("<:Js:820808491219550258> ❯ Discord.JS Version", "v"+Discord.version, true)
.addField("<:Js:820808491219550258> ❯ Distube Version", distube.version, true)
.addField("<:Music:820808065867710504> ❯ Number of Servers Playing Music", client.voice.connections.size, true)
.addField('<:Cpu:820808329499508736> ❯ CPU Usage', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB', true));
    }
}