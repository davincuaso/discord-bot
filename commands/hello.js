const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hello",
  description: "Says hello to the one who intialized command",
  run: async (bot, message, args) => {
    const msg = await message.channel.send(
      "What's good " + message.author.username + "!"
    );
    const Embed = new MessageEmbed.setTitle("Hey!").setDescription(
      `Latency is ${Math.floor(
        msg.createdTimestamp - message.createdTimestamp
      )}MS\nAPI Latency is ${Math.round(bot.ws.ping)}MS`
    )
    .setColor('RANDOM')
    msg.edit(Embed)
  }
};
