module.exports = {

    name: 'rc',
    description: "Explanation of the Roman Cancel mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Roman Cancel (RC)')
            .setDescription('**Performed by pressing any three attack buttons (except D) during an attack that touches the opponent. Costs 50% tension.** \n\nA red circle will appear around you when performed. All of the recovery of your attack will be cancelled. Useful for extending combos or keeping your attacks safe.')
            .setImage('http://www.dustloop.com/wiki/images/7/77/GGAC_RC.png')
            .setURL('http://www.dustloop.com/wiki/index.php?title=GGACR/Movement#Roman_Cancel');

        message.channel.send(newEmbed);
    }



}