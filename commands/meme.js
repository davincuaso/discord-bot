const {MessageEmbed} = require('discord.js');
const api = require("imageapi.js")

module.exports = {
    name: 'meme',
    description: 'Gets meme',
    run: async(bot, message, args) =>{
        let subreddits = [
            "dankmemes",
            "memes"
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length)-1)]
        let img = await api(subreddit)

        const Embed = new MessageEmbed()
        .setTitle(`Heres a meme from r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor('RANDOM')
        .setImage(img)
        message.channel.send(Embed)
    } 
}