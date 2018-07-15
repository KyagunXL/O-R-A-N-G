const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
          return message.reply("You are inferior to have the freedom of permission to finesse.");
    
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply("one can not simply finesse nothingness");
        if(!member.kickable) 
          return message.reply("you are inferior to finesse someone of a higher status than you.");
  
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "(no reason)";
  
        await member.kick(reason)
        .catch(error => message.reply(`Some error: ${error}`));
        message.reply(`${member.user.tag} has been whoop'd by ${message.author.tag} because: ${reason}`);

}

module.exports.help = {
    name: "kick"
}