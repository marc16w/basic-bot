const Discord = require('discord.js');

module.exports = (client, message, args) => { 

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    
    var perms = message.member.hasPermission("KICK_MEMBERS");
    
    if(!perms) return message.channel.send("No tienes Permiso Sufficiente");
    if (message.mentions.users.size < 1) return message.reply('Debes de mencionar a alguien.').catch(console.error);
    
    if (!razon) return message.channel.send('Escriba una razón, `!kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo kickear al usuario mencionado.');
         
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, Ha sido kickeado del servidor por la razon: ${razon}.`);

}