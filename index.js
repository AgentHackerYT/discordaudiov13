const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require('@discordjs/voice');
async function play(id){
}
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
                                });
                                const player2 = {
                                    play: (id)=>{
                                        const player = createAudioPlayer();
                                        const resource = createAudioResource(id);
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
