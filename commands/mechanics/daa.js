
module.exports = {

    name: 'daa',
    description: "Explanation of the Dead Angle Attack mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Dead Angle Attack (DAA)')
            .setDescription('**Performed by pressing forward + any two buttons simultaneously while in blockstun.** \n\nWhen performed, your character will flash white and then attack the opponent. Useful for stopping your opponent\'s pressure and resetting the match back to neutral.')
            .setImage('http://www.dustloop.com/wiki/images/thumb/8/81/GGAC_DAA.png/x375px-GGAC_DAA.png.pagespeed.ic.X_QAvz_qnl.webp')
            .setURL('http://www.dustloop.com/wiki/index.php/GGACR/Defense#Dead_Angle_Attack_.28DAA.29');

        message.channel.send(newEmbed);





    }


}