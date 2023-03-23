// This just  a simple script to demo the publishing process on to mosquitto
// locally
const mqtt = require("mqtt");

var client = mqtt.connect("mqtt://127.0.0.1:1883");

client.on("connect", () => {
    setInterval(() => {
        var random = Math.random() * 50;
        console.log(random);
        client.publish('Test\Topic', `This is a test Topic  ${random.toString()}`)
    }, 300);
});