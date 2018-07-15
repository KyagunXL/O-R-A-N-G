const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let botIcon = bot.user.displayAvatarURL;
      message.channel.send({embed: {
        title: "The Legislations of the Socialist Federative Republic of Inhibition",
        color: 16745728,
        author: {
            name: "Camden Youth O R A N G || The Representative of the High Council",
        },
        fields: [
            {
                name: "Server name:",
                value: (message.guild.name)
            },
            {
              name: "Created on:",
              value: (message.guild.createdAt)
            },
            {
              name: "You Joined:",
              value: (message.guild.joinedAt)
            },
            {
              name: "Server Population:",
              value: (message.guild.memberCount)
            }
        ]
    }})

}

module.exports.help = {
    name: "serverinfo"
}