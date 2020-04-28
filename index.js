const { DiscordBot } = require("dynobot-framework");
const keys = require('./keys');
const Bot = new DiscordBot(keys.key);
const { play, omit, content } = require('./music');

Bot.onEvent("ready", () => {
    console.log("Bot started");
    Bot.onEvent("message", (msg) => {
        if (msg.isMentioned(Bot.getClient().getUser())) {
            let dontInlucde = msg._message.content.slice('<@!349572826635960320>', 22);
            omit(msg._message.content, dontInlucde, (res) => {
                let data = res.slice('!play', 7);
                content(res, data, (res) => {
                    let final = res.split('v=');
                    console.log(final[1]);
                    play(final[1]);
                });
            });
        };
        //start of a new condidtion

    });
});