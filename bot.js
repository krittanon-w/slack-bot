var Bot = require('slackbots')
var shell = require('./shellHelper')

var settings = {
    token: process.env.BOT_TOKEN || 'xoxb-252284597079-pwKrhQVWAhWUMBPwNT3qqx1B',
    name: process.env.BOT_NAME || 'BooBoo'
}

var bot = new Bot(settings)

bot.on('start', () => {
    bot.getUserId('krittanon.w').then((id) => {
        bot.postMessageToUser(id, `Hello boss :)`)
    })
})

bot.on('message', (msg) => {
    if (msg.type === 'message' && msg.bot_id === undefined) {
        console.log('cmd :', msg.text)
        bot.postMessage(msg.channel, `〉Excuted⚡️ "${msg.text}" please wait...`).then((res) => {
            shell.cmd(msg.text, (error, stdout, stderr) => {
                if (error !== null) {
                    bot.postMessage(msg.channel, `〉Error \n${error}`)
                }
                else{
                    bot.postMessage(msg.channel, `〉Return \n${stdout}`)
                }
            })
        })
    }
    // console.log(msg)
})


