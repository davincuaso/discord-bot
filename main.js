const {Collection, Discord} = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({
    disableEveryone: true
});

//getting info from json file
const config = require('./config.json')
const prefix = config.prefix;
const token = config.token;

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//making sure bot is initialized
bot.on('ready', () =>{
    bot.user.setActivity(`${prefix}help`)
    console.log(`Hello! ${bot.user.username} is now online!`)
})

bot.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const cmd = args.shift().toLowerCase;
    if(cmd.length == 0) return;
    const command = bot.commands.get(cmd)
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot, message, args)
})

bot.login(token)

