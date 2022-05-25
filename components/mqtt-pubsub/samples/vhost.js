const MqttPubSub = require('../index.js')

const username = 'username'
const password = 'password'
const vhost = 'vhost'

// THIS SAMPLE IS NOT FUNCTIONAL WITH THIS HOST
const mqtt = new MqttPubSub(host = 'broker.emqx.io', username = username,  password = password, vhost = vhost + ':' + username)

const topic = 'myTestTopic'
const message = 'myTestMessage'

mqtt.registerListenerOnTopic('myTestTopic')
mqtt.receiveMessage((topic, message) => {
    console.log('topic ', topic)
    console.log('message ', message.toString())
    mqtt.close()
})
mqtt.sendMessage(topic, message)