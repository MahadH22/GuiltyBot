module.exports = {

    name: 'ib',
    description: "Explanation of the Instant Block mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Instant Block (IB)')
            .setDescription('**Performed by blocking an opponent\'s attack right before it comes in contact with you.** \n\nYour character will flash white when performed. Allows you to recover faster from blockstun and decreases pushback when blocking.')
            .setImage('http://www.dustloop.com/wiki/images/6/65/xGGAC_IB.png.pagespeed.ic.pMpMCYbEXt.webp')
            .setURL('http://www.dustloop.com/wiki/index.php?title=GGACR/Defense#Instant_Block_.28IB.29');

        message.channel.send(newEmbed);
    }



}