const Discord = require('discord.js');
const client = new Discord.Client();

const re = /\b(same hat)(?![0-9A-Za-z_])/i;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.content.match(re) !== null) {
        const attachment = new Discord.MessageAttachment('same_hat.png');
        msg.channel.send({
            files: [{
                attachment: 'same_hat.png',
                name: 'same_hat.png',
            }],
        });
    }
});

client.login('');

