const { Client, Attachment } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'same hat') {
        const attachment = new Attachment("same_hat.png");
        msg.channel.send(attachment);
    }
});

client.login('');