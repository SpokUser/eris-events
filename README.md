# Eris Events

A simple but useful repository that explains the use of some events from the Eris api

**Warning**: This repository uses recent Eris features.

```js
const { Client } = require("eris");
const client = new Client("BOT_TOKEN");

// shard ready
/* Emitted when the shard becomes ready to start working. */
client.on("shardReady", (shardId) => {
    console.log(`Shard ${shardId} initialized with sucess!`)
})
// ready
/* Emitted when the client becomes ready to start working. */
client.on("ready", () => {
    console.log("All the shards was initialized with sucess");
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
````