const { Client } = require('discord.js');
const client = new Client();

const re = /\b(same hat)(?![0-9A-Za-z_])/i;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
    if (msg.content.match(re) !== null) {
        await msg.channel.send({
            files: [{
                attachment: './same_hat.png',
                name: 'same_hat.png',
            }]
        });

        console.log(`[@${msg.author.tag}] Matched: ${msg.content}`);
    }
});

client.login(process.env.DISCORD_AUTH_TOKEN);
