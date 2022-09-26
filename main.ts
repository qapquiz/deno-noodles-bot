import {
  Bot,
  Intents,
  startBot,
  createBot,
  Message,
} from "https://deno.land/x/discordeno@16.0.1/mod.ts";

const bot = createBot({
  token: Deno.env.get("DISCORD_TOKEN") ?? "",
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    ready() {
      console.log("Successfully connected to gateway");
    },
  },
});

bot.events.messageCreate = function (b: Bot, message: Message) {
  // Process the message here with your command handler.
};

await startBot(bot);
