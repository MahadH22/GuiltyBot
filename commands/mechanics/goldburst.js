
module.exports = {

    name: 'goldburst',
    description: "Explanation of the Gold Burst mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Gold Burst')
            .setDescription('**Performed by pressing D + any other attack button.** \n\nA gold ring surrounds you when performed. Hitting your opponent with it gives you a full tension bar! Gives you a nice advantage when used properly.')
            .setImage('http://www.dustloop.com/wiki/images/2/2f/GGAC_Gold_Burst.png')
            .setURL('http://www.dustloop.com/wiki/index.php?title=GGACR/Gauges#Gold_Burst');

        message.channel.send(newEmbed);
    }



}