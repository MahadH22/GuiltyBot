module.exports = {

    name: 'fb',
    description: "Explanation of the Force Break mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Force Breaks (FB)')
            .setDescription('**Specials moves performed with the D button. Costs 25% tension.** \n\nEach character has one or more Force Breaks, and they are generally pretty strong.')
            .setImage('http://www.dustloop.com/wiki/images/5/57/xGGAC_FB.png.pagespeed.ic.U-f8UgIdWv.webp')
            .setURL('http://www.dustloop.com/wiki/index.php?title=GGACR/Controls#Force_Breaks_.28FB.29');

        message.channel.send(newEmbed);
    }



}