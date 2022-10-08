const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const re = /\b(same hat)(?![0-9A-Za-z_])/i;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (msg) => {
    const content = msg.content || '';
    if (content.match(re) !== null) {
        await msg.channel.send({
            files: [{
                attachment: './same_hat.png',
                name: 'same_hat.png',
            }]
        });

        console.log(`[@${msg.author?.tag}] Matched: ${content}`);
    }
});

if (process.env.DISCORD_AUTH_TOKEN) {
    client.login(process.env.DISCORD_AUTH_TOKEN);
} else {
    throw new Error("DISCORD_AUTH_TOKEN is not set");
}
