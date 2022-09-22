const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
        res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
        res.send(new Date());
});
app.listen(3000, () => {
        console.log(chalk.red.bold('Express is ready.'))
});

const Discord = require("discord.js");

const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents } = require("discord.js");


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
  allowedMentions: { repliedUser: false }, ws: {properties: { $browser:"Discord iOS" }
      },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "/";

client.on('ready', () => {
  console.log(`[Logged in as] ${client.user.tag}`);
  console.log(`[ID Bot] ${client.user.id}`);
  console.log(`[Guilds Bot] ${client.guilds.cache.size}`);
  client.user.setActivity(`Decémber ♪`, { type: 'WATCHING' })
  client.user.setStatus("idle"); 
  
});
client.login(process.env.token).catch((err) => {
   console.log(err.message)
});




client.on("messageCreate" , saleh => {
  const ms = require("ms")
  let args = saleh.content.split(" ")
  if(saleh.content.startsWith(prefix + "sssseeeettttt-tiemmmmmmmm")) {
    if(!args[1]) return saleh.reply("**Please Specify the timer ❌**");
    if(!args[1].endsWith("s")) {
    if(!args[1].endsWith("m")) {
    if(!args[1].endsWith("h")) {
    if(!args[1].endsWith("d")) {
      return saleh.reply("**Please Provide me a valid timer ❌ !**")
    }}}}
    if(isNaN(args[1][0])) return saleh.reply("**That is not a number ❌ !**")
    saleh.reply(`**Done Setting the time to ${args[1]}**`)
  let azkar = [
"> ** <a:11:1022298925308325898> الله أكبـر ** ",
"> ** <a:11:1022298925308325898> سُبحان الله ** ",
"> ** <a:11:1022298925308325898> الحمدلله ** ",
"> ** <a:11:1022298925308325898> لا اله الا الله ** ",
"> ** <a:11:1022298925308325898> الله أكبـر ** ",
"> ** <a:11:1022298925308325898> أستغفــرالله ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> الله أكبـر ** ",
"> ** <a:11:1022298925308325898> سُبحان الله ** ",
"> ** <a:11:1022298925308325898> الحمدلله ** ",
"> ** <a:11:1022298925308325898> لا اله الا الله ** ",
"> ** <a:11:1022298925308325898> الله أكبـر ** ",
"> ** <a:11:1022298925308325898> أستغفــرالله ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> الله أكبـر ** ",
"> ** <a:11:1022298925308325898> سُبحان الله ** ",
"> ** <a:11:1022298925308325898> الحمدلله ** ",
"> ** <a:11:1022298925308325898> لا اله الا الله ** ",
"> ** <a:11:1022298925308325898> الله أكبـر ** ",
"> ** <a:11:1022298925308325898> أستغفــرالله ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
"> ** <a:11:1022298925308325898> لاحول ولا قوة الا بالله ** ",
"> ** <a:11:1022298925308325898> سُبحان الله وبحمده ** ",
"> ** <a:11:1022298925308325898> سُبحان الله العظيم ** ",
  ]
  let azkar2 = azkar[Math.floor(Math.random() * azkar.length)]
    setInterval(() => {
    saleh.channel.send(`> ** : <a:11:1022298925308325898> .. اذكار كريمة **\n\n${azkar[Math.floor(Math.random() * azkar.length)]}`)
    },ms(args[1]))
  }
}) ;

let msgline = ['1018663534156066986'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm") return
  
if(msgline.includes(message.channel.id)){   
  message.react("<a:16:1017338846888869948>")
 let args = message.content.split(',')

   }
});






