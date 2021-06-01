module.exports = {

    name: 'iad',
    description: "Explanation of the Instant Air Dash technique.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#48C9B0')
            .setTitle('Instant Air Dash (IAD)')
            .setDescription('**An air dash performed as low to the ground as possible from a standing position.** \n\n An IAD is performed by doing the following inputs: **956**. \n\n The 9 input counts as both a jump input and a forward input. Then the 6 at the end finishes the dash input.')
            .setURL('https://www.dustloop.com/wiki/index.php?title=Instant_Air_Dash');

        message.channel.send(newEmbed);





    }


}