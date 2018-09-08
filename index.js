const Discord = require('discord.io');

const bot = new Discord.Client({
    autorun: true,
    token: ""
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message.toLowerCase() === "same hat") {
        bot.uploadFile({
            to: channelID,
            file: "same_hat.png"
        });
    }
});