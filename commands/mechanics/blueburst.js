module.exports = {

    name: 'blueburst',
    description: "Explanation of the Blue Burst mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Blue Burst')
            .setDescription('**Performed by pressing D + any other attack button while blocking or being hit.** \n\nA blue ring surrounds you when performed. Expensive tool used for saving yourself from dying, or preventing your opponent from gaining momentum.')
            .setImage('http://www.dustloop.com/wiki/images/7/7d/xGGAC_Blue_Burst.png.pagespeed.ic.uNy3TarBFd.webp')
            .setURL('http://www.dustloop.com/wiki/index.php?title=GGACR/Gauges#Blue_Burst');

        message.channel.send(newEmbed);
    }



}