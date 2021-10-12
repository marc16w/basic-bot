const Discord = require('discord.js')

module.exports = (client, message)  => { 
 
   
            const embedDatos = new Discord.MessageEmbed() 
            .setTitle("Bienvenid@ **TRON HOSTING**")
            .setColor(0x033bfd)
            .setDescription(`${message.user} Pasalo bien y Disfruta!! `)
            .setThumbnail("imagen del servidor") // Aqui va la img del imgur
            .setFooter("TRON HOSTING", client.user.avatarURL())
            .setTimestamp()    
    
            // message.channel.send({ embed: embedDatos }); 
            client.channels.cache.get('808440521508782081').send({ embed: embedDatos })  // id del canal de bienvenida

    }


 

