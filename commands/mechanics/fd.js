module.exports = {

    name: 'fd',
    description: "Explanation of the Faultless Defense mechanic.",
    execute(message, args, Discord) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#900C3F')
            .setTitle('Faultless Defense (FD)')
            .setDescription('**Performed by holding backwards and pressing any two buttons (except D), and not S+H.** \n\nA green circle will hover around you when performed. An incredibly vital defensive tool that has several benefits, such as increasing pushback, negating chip damage and many more.')
            .setImage('http://www.dustloop.com/wiki/images/thumb/3/3c/GGAC_FD.png/375px-GGAC_FD.png')
            .setURL('http://www.dustloop.com/wiki/index.php/GGACR/Defense#Faultless_Defense');

        message.channel.send(newEmbed);
    }



}