const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("TUTORIAL PARA BORRAR COCHE DE FIVEM")
    .setColor(0xD703FC)
    .setDescription("** 1.- Windows + R** \n\n  2.- Pon **appdata** Enter \n\n 3.- Abre la carpeta Local \n\n 4.- Busca la Carpeta de **Fivem** abrela \n\n 5.- FiveM Application Data \n\n 6.- Busca la Carpeta de **cache** abrela \n\n 7.- Borra todas las carpetas menos la carpeta **game**")
    .setTimestamp()
    
    
message.channel.send({ embed: embedDatos }); 

}