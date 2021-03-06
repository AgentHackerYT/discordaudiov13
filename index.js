const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require('@discordjs/voice');
let selfDeaf = false
let selfMute = false
module.exports = {
    init:(message , client)=>{
        const a = {
            message: message,
            message: {
                member: message.member,
                member:{
                    voice: message.member.voice,
                    voice:{
                        channel: message.member.voice.channel,
                        channel:{
                            join: ()=>{   
                                const connection = joinVoiceChannel({
                                    channelId: message.member.voice.channel.id,
                                    guildId: message.guild.id,
                                    adapterCreator: message.guild.voiceAdapterCreator,
                                    selfDeaf: selfDeaf,
                                    selfMute: selfMute,
                                });
                                const player2 = {
                                    setSelfDeaf:(data = [true])=>{
                                    selfDeaf = data
                                    },
                                    setSelfMute:(data = [true])=>{
                                        selfMute = data
                                    },
                                    play: (id , options)=>{
                                        const player = createAudioPlayer();
                                        const resource = createAudioResource(id , options);
                                        connection.subscribe(player)
                                        player.play(resource)
                                        const a = {
                                            pause: () =>{
                                                player.pause()
                                            },
                                            resume: () =>{
                                                player.unpause()
                                            },
                                            distroy: () =>{
                                                connection.destroy()                                         
                                             },
                                             disconnect: () =>{
                                                 connection.disconnect()
                                             },
                                             distroy: () =>{
                                                 connection.destroy()
                                             },
                                             rejoin: () =>{
                                                 connection.rejoin()
                                             },
                                             setVolume: (volume) =>{
                                                 resource.volume.setVolume(volume)
                                             }
                                            
                                        }
                                        return a
                                    },
                                }
                                return player2
                            },
                        }
                    }
                }
            }
        }
        return a
    }
}
