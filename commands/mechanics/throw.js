module.exports = {

    name: 'throw',
    description: "Explanation of how throws work in +R.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Throws')
            .setDescription('**Performed by pressing forward + H or backward + H near your opponent.** \n\n • Throws **CANNOT** be blocked. \n• Throws have **0 frames of startup**, so they come out instantly assuming your in range.\n • **You cannot throw while running**, unless you Dash Brake.')
            .setImage('http://www.dustloop.com/wiki/images/c/c9/GGAC_Throws.png')
            .setURL('https://www.dustloop.com/wiki/index.php/GGACR/Offense#Throws');

        message.channel.send(newEmbed);
    }



}