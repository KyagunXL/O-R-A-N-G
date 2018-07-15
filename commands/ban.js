const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
        return message.reply("you are inferior to have the freedom of permission to finesse.");
  
      let member = message.mentions.members.first();
      if(!member)
        return message.reply("one can not simply finesse nothingness");
      if(!member.bannable) 
        return message.reply("you are inferior to finesse someone of a higher status than you.");

      let reason = args.slice(1).join(' ');
      if(!reason) reason = "(no reason)";
      
      await member.ban(reason)
        .catch(error => message.reply(`Some error: ${error}`));
      message.reply(`${member.user.tag} has been whoop'd by ${message.author.tag} because: ${reason}`);

}

module.exports.help = {
    name: "ban"
}