const { Client, GatewayIntentBits, Activity, ActivityType } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = process.env.TOKEN

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setPresence({
    activities: [{ name: 'happy😀' }],
    ActivityType: ActivityType.Listening,
    status: 'online',
  })
});

console.log("Current Token: " + token)
client.login(token);
