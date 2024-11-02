import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
  console.log('Bot is online!');
});

console.log('Token: ', process.env.DISCORD_BOT_TOKEN);

client.login(process.env.DISCORD_BOT_TOKEN);
