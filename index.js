const fs = require('fs'),
    { Client, } = require('discord.js')

const { token, bypass } = require('./config.json')
const client = new Client()

let previousChannel, connection, dispather;
client
    .on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`)
    })
    .on('voiceStateUpdate', async (oldState, newState) => {
        if (newState.id == client.user.id) return
        if (newState.channelID !== null) previousChannel = newState.channelID
        if (newState.channelID == null && !bypass.includes(newState.id) && !!previousChannel) {
            client.channels.cache.get(previousChannel).leave()
            return [previousChannel, dispather] = [null, null];
        }

        if (bypass.includes(newState.id)) return
        let channel = client.channels.cache.get(newState.channelID)
        if (!channel) return

        return connection = await channel.join()
    })
    .on('guildMemberSpeaking', async (member, speaking) => {
        if (!connection) return
        if (bypass.includes(member.user.id)) return

        if (!dispather)
            dispather = connection.play(fs.createReadStream('./audio.mp3'), {
                volume: 15
            })
        else if (dispather && !speaking.bitfield) {
            dispather.destroy()
            dispather = undefined
        }
    })
    .on('error', console.log)
    .on('warn', console.log)
    .login(token)

process.on('unhandledRejection', console.log)