const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const activities_list = [
    "Made By Aeronine", 
    "@AeronineBtw ",
    "On Twitter",];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 500); // Runs this every 10 seconds.
});


const jointocreate = require("./jointocreate");
jointocreate(client);


client.login(config.TOKEN);

