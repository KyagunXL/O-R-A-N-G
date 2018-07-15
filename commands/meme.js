const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const memes = [ {file: "./customMemes/m1.png"}, {file: "./customMemes/m2.png"}, {file: "./customMemes/m3.png"},
    {file: "./customMemes/m4.png"}, {file: "./customMemes/m5.png"}, {file: "./customMemes/m6.png"}, {file: "./customMemes/m7.png"},
    {file: "./customMemes/m8.png"}, {file: "./customMemes/m9.png"}, {file: "./customMemes/m10.png"}, {file: "./customMemes/m11.png"},
    {file: "./customMemes/m12.png"}, {file: "./customMemes/m13.png"}, {file: "./customMemes/m14.png"}, {file: "./customMemes/m15.png"},
    {file: "./customMemes/m16.png"}, {file: "./customMemes/m17.png"}, {file: "./customMemes/m18.png"}, {file: "./customMemes/m19.png"},
    {file: "./customMemes/m20.png"}, {file: "./customMemes/m21.png"}, {file: "./customMemes/m22.png"}, {file: "./customMemes/m23.png"},
    {file: "./customMemes/m24.png"}, {file: "./customMemes/m25.jpg"}, {file: "./customMemes/m26.png"}, {file: "./customMemes/m27.png"},
    {file: "./customMemes/m28.png"}, {file: "./customMemes/m29.png"}, {file: "./customMemes/m30.png"}, {file: "./customMemes/m31.png"},
    {file: "./customMemes/m32.png"}, {file: "./customMemes/m33.png"}, {file: "./customMemes/m34.png"}, {file: "./customMemes/m35.png"},
    {file: "./customMemes/m36.png"}, {file: "./customMemes/m37.png"}, {file: "./customMemes/m38.png"}, {file: "./customMemes/m39.png"},
    {file: "./customMemes/m40.png"}, {file: "./customMemes/m41.png"}];

    var meme = memes[Math.floor(Math.random()*(memes.length))]
    message.channel.send(meme);
    
}

module.exports.help = {
    name: "meme"
}