const Discord = require("discord.js");
const client = new Discord.Client();

const TempChannels = require("discord-temp-channels");
const tempChannels = new TempChannels(client);

// Register a new main channel
tempChannels.registerChannel("channel-id", {
    childCategory: "category-id",
    childAutoDeleteIfEmpty: true,
    childMaxUsers: 15, // change This Number If You Want To Limit The Members in A Voice Channel
    childFormat: (member, count) => `#${count} | ${member.user.username}'s lounge`
});

client.login("YOUR_TOKEN");
