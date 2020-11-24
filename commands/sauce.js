module.exports = {
    name: 'sauce',
    description: 'only for saucey bois',
    execute(message, args){

        if(message.member.roles.cache.has('780737605255692318')){
        message.channel.send(message.author.username + " is granted the SAUCE");
        }
        else{
            message.channel.send('You cant send this command.')
        }
    }
}