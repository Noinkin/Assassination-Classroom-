const keepAlive = require("./server.js")
const Discord = require('discord.js');
const token = process.env.TOKEN

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '='


client.once('ready', () => {
  console.log('online!');
  client.user.setActivity("Spamming Hackers and Killing Noobs")
});

keepAlive()

client.on('message', message => {
  if(!message.guild) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const { guild, member, content } = message
    if(content.includes('=mention')) {
        for (let i = 0; i < 10; i++) {
          const mention = message.mentions.users.first();
          if (mention == null) {
            message.channel.send('No')
          } else {
            const target = mention.id
            message.channel.send(`<@${target}>`);
          }
          
        }
     
    } else if(message.content.toLowerCase() == 'hi') {
      message.channel.send('Hi!')
    } else if(message.content.toLowerCase() == 'hello') {
      message.channel.send('Hello!')
    } else if(content.includes('<@862748716523716648>')) {
      message.channel.send('Hello, I am Spam Bot, I like spamming a lot!')
    } else if(content.includes('Spammer 3000')) {
      message.channel.send('Hello, I am Spam Bot, I like spamming a lot!')
    } else if(message.content.toLowerCase() == 'script') {
     if(message.member.permissions.has("ADMINISTRATOR")) { 
       message.channel.send('{Man} Once upon a time there was a lovely princess.\n\nBut she had an enchantment upon her of a fearful sort which could only \n\nbe broken by love\'s first kiss.\n\nShe was locked away in a castle guarded by a terrible fire-breathing \n\ndragon.\n\nMany brave knigts had attempted to free her from this dreadful prison, \n\nbut non prevailed.\n\nShe waited in the dragon\'s keep in the highest room of the tallest \n\ntower for her true love and true love\'s first kiss.\n\n{Laughing} \n\nLike that\'s ever gonna happen.\n\n{Paper Rusting, Toilet Flushes}\n\nWhat a load of - \n\n\n\n\nSomebody once told me the world is gonna roll me\n\nI ain\'t the sharpest tool in the shed\n\nShe was lookin\' kind of dumb with her finger and her thumb\n\nIn the shape of an \"L\" on her forehead\n\nThe years start comin\' and they don\'t stop comin\'\n\nFed to the rules and hit the ground runnin\'\n\nDidn\'t make sense not to live for fun\n\nYour brain gets smart but your head gets dumb\n\nSo much to do so much to see\n\n')
       message.channel.send('So what\'s wrong with takin\' the backstreets\n\nYou\'ll never know if you don\'t go\n\nYou\'ll never shine if you don\'t glow\n\nHey, now You\'re an all-star\n\nGet your game on, go play\n\nHey, now You\'re a rock star\n\nGet the show on, get paid\n\nAnd all that glitters is gold\n\nOnly shootin\' stars break the mold\n\nIt\'s a cool place and they say it gets colder\n\nYou\'re bundled up now but wait till you get older\n\nBut the meteor men beg to differ\n\nJudging by the hole in the satellite picture\n\nThe ice we skate is gettin\' pretty thin\n\nThe water\'s getting warm so you might as well swim\n\nMy world\'s on fire\n\nHow \'bout yours\n\nThat\'s the way I like it and I\'ll never get bored\n\nHey, now, you\'re an all-star\n\n{Shouting}\n\nGet your game on, go play\n\nHey, now You\'re a rock star\n\nGet the show on, get paid\n\nAnd all that glitters is gold\n\nOnly shootin\' stars break the mold\n\n{Belches}\n\nGo!\n\nGo!\n\n{Record Scratching}\n\nGo. Go.Go.\n\nHey, now, you\'re an all-star\n\nGet your game on, go play\n\nHey, now You\'re a rock star\n\nGet the show on, get paid\n\nAnd all that glitters is gold\n\nOnly shootin\' stars break the mold')
      }
    } else if(message.content.toLowerCase() == 'fill') {
     if(message.member.permissions.has("ADMINISTRATOR")) { 
      for (let i = 0; i < 5; i++) {
        message.channel.send('⠀\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n⠀')
      }
      } 
    } else if(message.content.toLowerCase() == 'nuke') {
     if(message.member.permissions.has("ADMINISTRATOR")) {
       message.channel.bulkDelete(100);
       message.channel.send('Nuked!')
      }
    } if(content.includes('=bann')) {
      if(message.member.permissions.has("ADMINISTRATOR")) {
        const channel01 = client.channels.cache.find(channel => channel.id === "851988672391151626");
        for (let i = 0; i < 1; i++) {
          const mention = message.mentions.users.first();
          if (mention == null) {

          } else {
            const target = message.guild.members.cache.get(mention.id);
            message.channel.send(`${target}, You Have Not Been Banned \(*Queue The Sad Music*\) https://tenor.com/view/admin-banned-thor-mjolnir-gif-17343845`)
          }
          
        }
      }
    } else if (content.includes('=calculate')) {
      if(args[1], args[2], args[3]) {

        if (args[2] === '*') {
          let x = myFunction(args[1], args[3])
          function myFunction(a, b) {
      
            message.channel.send(a * b);
          }
        } else if (args[2] === '/') {
          let x = myFunction(args[1], args[3])
          function myFunction(a, b) {
      
            message.channel.send(a / b);
          }
        } else {
          message.channel.send('Do *calculate number \`/ or x(x = multiply, / = divide)\` number');
        }
      } else {
        message.channel.send('Do *calculate number \`/ or x(x = multiply, / = divide)\` number');
      }
    } else if (message.content === '=avatar') {
      if(message.mentions.users.first()) {
        const target = message.mentions.users.first()
        message.channel.send(target.displayAvatarURL());
      } else {
        message.channel.send(message.author.displayAvatarURL());
      }
    } else if (message.content.toLowerCase() == 'test')  {
      message.channel.send(Math.floor((Math.random() * 1000000) + 1))
    } else if (message.content.toLowerCase() == 'time') {
      var x = new Date()
      message.channel.send(x.getUTCHours() + ':' + x.getUTCMinutes())
    } else if (message.content.toLowerCase() == 'date') {
      var x = new Date()
      message.channel.send(`${ x.getUTCHours() }:${ x.getUTCMinutes() }  ${ x.getUTCDate() }/${ x.getUTCMonth() }/${ x.getUTCFullYear() }`)
    } else if (message.content.toLowerCase() == '=help') {
    message.author.send('https://tenor.com/view/rick-roll-rick-astley-dance-meme-mic-gif-17243789')
    message.author.send('Get rickrolled nerd')
    message.channel.send('Check your direct messages')
    message.author.send('https://tenor.com/view/stick-bug-gif-18910704')
    message.author.send('Get stickbugged and ricked? **NERD**')
    }
  }
)

client.login(token);