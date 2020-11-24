const {MessageEmbed} = require('discord.js');
const api = require("imageapi.js")

module.exports = {
    name: 'reddit',
    description: 'Gets a random reddit post',
    category: 'fun',
    usage: "<subreddit>",
    run: async(bot, message, args) =>{
        let Subreddit = message.content.slice(8)
        if(!Subreddit) return message.channel.send("You didnt specify a subreddit my guy.")
        try{
            let img = await api(Subreddit)
            const Embed = new MessageEmbed()
            .setTitle(`Here you go chief a pic from r/${Subreddit}`)
            .setColor('RANDOM')
            .setImage(img)
            .setURL(`https://reddit.com/r/${Subreddit}`)
            message.channel.send(Embed)
        }catch(err){
            return message.channel.send(err)
        }
    }
}