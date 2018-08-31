const util = require('../util')
const Discord = require('discord.js')

module.exports = async function(settings, msg, lang, guildSettings) {
  const args = msg.content.replace(settings.prefix, '').split(' ')
  if (!args[1] || args[1] === 'help') {
    const embed = new Discord.RichEmbed()
      .setTitle(lang.availablelang)
      .addField(':flag_jp: Japanese - 日本語', 'ja')
      .addField(':flag_us: English - English', 'en')
    msg.channel.send(embed)
  } else if (args[1] === 'en' || args[1] === 'ja') {
    settings.language = args[1]
    await util.writeSettings(guildSettings, settings, msg.channel, 'language')
  }
}