module.exports = {

    name: 'frc',
    description: "Explanation of the Force Roman Cancel mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Force Roman Cancel (FRC)')
            .setDescription('**Performed by pressing any three attack buttons (except D) during specific attacks. Costs 25% tension.** \n\nA blue circle will appear around you when performed. Similar to a regular Roman cancel, except **they can only be done on specific moves, at specific times.** They can even be done on whiff!')
            .setImage('http://www.dustloop.com/wiki/images/6/6d/GGAC_FRC.png')
            .setURL('https://www.dustloop.com/wiki/index.php?title=GGACR/Movement#Force_Roman_Cancel');

        message.channel.send(newEmbed);
    }



}