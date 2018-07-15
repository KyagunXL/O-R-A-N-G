const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let botIcon = bot.user.displayAvatarURL;
          message.channel.send({embed: {
              title: "The Legislations of the Socialist Federative Republic of Inhibition",
              description: "\nThe bringer of news from the high council of O R A N G comes unto the mere human minds upon the base Third existential plane. His message to the un-ascended: E̓ͪ͑",
              color: 16745728,
              footer: {
                  icon_url: (botIcon)
              },
              thumbnail: {
                  url: (botIcon)
              },
              author: {
                  name: "Camden Youth O R A N G || The Representative of the High Council",
                  icon_url: (botIcon)
              },
              fields: [
                  {
                  name: "Specifically created to cause suffering.",
                  value: "'*this piece of naturally grown organism contains your daily vitamins essential for the greater good for the ending of existance*' ~ ***oracle***"
                  }
              ]
          }}) 

}

module.exports.help = {
    name: "botinfo"
}