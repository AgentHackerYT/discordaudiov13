# discordaudiov13
- A Audio Player Which Very Easy to use
## Docs
- Installing discordaudiov13
```
npm install discordaudiov13
```
- Joining Voice Channels
```js
const da = require('discordaudiov13')
client.on('messageCreate', async message => {
    const msg = da.init(message , client).message
	// Join the same voice channel of the author of the message
    if(message.content === "join"){
	if (message.member.voice.channel) {
		const connection = msg.member.voice.channel.join();
	}
    }
});
```
- Playing Audio
```js
const da = require('discordaudiov13')
const prefix = "!"
client.on('messageCreate', async message => {
    	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    const msg = da.init(message , client).message
	// Join the same voice channel of the author of the message
    if(command === "audio"){
        const connection = msg.member.voice.channel.join();
        const options = {
            inlineVolume: data,
            inputType: data,
            silencePaddingFrames: data,
            metadata: data
        }
        const dispatcher = connection.play('URL/Path As in v12' , options/*Options in Beta and will be according to v13*/)
         if(args[0] == "pause"){
            dispatcher.pause()
        }else if(args[0] == "disconnect"){
            dispatcher.disconnect()
        }else if(args[0] == "resume"){
            dispatcher.resume()
        }else if(args[0] == "volume"){
            dispatcher.setVolume(args[1] || 0.25)
        }
    }
});
```
- All Functions
```js
const da = require('discordaudiov13')
const msg = da.init(message , client).message
const connection = message.member.voice.channel.join()
const dispatcher = connection.play(`URL/Path As in v12`)
dispatcher.pause()
dispatcher.resume()
dispatcher.distroy()
dispatcher.disconnect()
dispatcher.rejoin()
dispatcher.setVolume(SomeNumber)
```
