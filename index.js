const { Client } = require("eris");
const client = new Client("BOT_TOKEN");

// shardPreReady
/* Emitted when the fragment finishes processing the ready packet. */
client.on("shardPreReady", (shardId) => {
    console.log(`Initializing shard ${shardId}!`);
});
// shardReady
/* Emitted when the shard becomes ready to start working. */
client.on("shardReady", (shardId) => {
    console.log(`Shard ${shardId} initialized with sucess!`);
});
// shardDisconnect
/* Emitted when the shard is disconnected. */
client.on("shardDisconnect", (shardId) => {
    console.log(`Shard ${shardId} was disconnected!`);
});
// shardResume
/* Emitted when a shard resumes */
client.on("shardResume", (shardId) => {
    console.log(`Shard ${shardId} was resumed!`);
});
// ready
/* Emitted when the client becomes ready to start working. */
client.on("ready", () => {
    console.log("All the shards was initialized with sucess");
});
// messageCreate
/* Emitted whenever a message is created.
PARAMETER      TYPE           DESCRIPTION
message        Message        The created message    */
client.on("messageCreate", (message) => {
    if(message.content === "!ping") {
        client.createMessage(message.channel.id, "Pong!");
    }
});

client.connect();
