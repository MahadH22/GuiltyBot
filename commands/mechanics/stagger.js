module.exports = {

    name: 'stagger',
    description: "Explanation of the Stagger mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Staggers')
            .setDescription('**Certain attacks cause you to become staggered when you get hit by them.** \n\nWhile staggered, you are completely vulnerable to your opponent\'s attacks. **Mash alternatively between the left and right directions on your stick/pad** as fast as possible to escape.')
            .setImage('https://i.imgur.com/lf00gCk.png')
            .setURL('https://www.dustloop.com/wiki/index.php/GGACR/Offense#Staggers');

        message.channel.send(newEmbed);





    }


}