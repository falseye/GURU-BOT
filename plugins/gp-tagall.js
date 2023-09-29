let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`𒈞 Group : *${groupMetadata.subject}*\n𒈞 Members : *${participants.length}*${text ? `\n𒈞 Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ 𝟗𝑖𝑛𝑒 𝑥𝟑 x 𝑓𝑎𝑙𝑠𝑒 𝑒𝑦𝑒 ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
