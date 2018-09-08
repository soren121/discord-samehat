const { Client, Attachment } = require('discord.js');
const client = new Client();

const re = /(same hat)(?![0-9A-Za-z_])/i;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.match(re) !== null) {
        const attachment = new Attachment("same_hat.png");
        msg.channel.send(attachment);
    }
});

client.login('');
