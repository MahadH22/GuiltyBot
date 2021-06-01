module.exports = {

    name: 'sb',
    description: "Explanation of the Slashback mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Slashback (SB)')
            .setDescription('**Performed by holding backwards and tapping S + H.** \n\nWhen performed, a gold ring will appear around you. If timed properly, it significantly reduces the blockstun of your opponent\'s attack, along with many other benefits. ***VERY HIGH RISK.*** ')
            .setImage('http://www.dustloop.com/wiki/images/2/2b/GGAC_SB.png')
            .setURL('http://www.dustloop.com/wiki/index.php?title=GGACR/Defense#Slashback_.28SB.29');

        message.channel.send(newEmbed);





    }


}