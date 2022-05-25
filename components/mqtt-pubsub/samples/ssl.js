const MqttPubSub = require('../index.js')

const mqtt = new MqttPubSub(host = 'broker.emqx.io', ssl = true)

const topic = 'myTestTopic'
const message = 'myTestMessage'

mqtt.registerListenerOnTopic('myTestTopic')
mqtt.receiveMessage((topic, message) => {
    console.log('topic ', topic)
    console.log('message ', message.toString())
    mqtt.close()
})
mqtt.sendMessage(topic, message)