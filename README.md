# # discordaudiov13
- A Audio Player Which Very Easy to use
# How To use
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

```
