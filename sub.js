// This shows a simple subscriber process
const mqtt = require("mqtt");

var client = mqtt.connect("mqtt://127.0.0.1:1883");

client.on("connect", () => {
    client.subscribe('Test\Topic');
    console.log("The Client has subscribed");
});

client.on('message', (topic, message) => {
    console.log(message.toString());
})