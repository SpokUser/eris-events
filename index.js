const { Client } = require("eris");
const client = new Client("BOT_TOKEN");

// ready
/* Emitted when the client becomes ready to start working. */
client.on("ready", () => {
    console.log("Ready!");
});

// message
/* Emitted whenever a message is created.
PARAMETER      TYPE           DESCRIPTION
message        Message        The created message    */
client.on("messageCreate", (message) => {
    if(message.content === "!ping") {
        client.createMessage(message.channel.id, "Pong!");
    }
});

client.connect();
