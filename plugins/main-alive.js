

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://raw.githubusercontent.com/false-eye/Xlicon-v2/master/Assets/audio/@919539901834.mp3"
    let url = "https://github.com/false-eye/"
    let murl = "https://youtu.be/iI34LYmJ1Fs?si=Cz3j9daLBo6VU2vF"
    let img = "https://i.imgur.com/M3p0NBV.jpeg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝑁𝑜𝑡 𝐷𝑒𝑎𝑑 :)",
          body: "𝟗𝑖𝑛𝑒 𝑥𝟑  ×  𝑓𝑎𝑙𝑠𝑒 𝑒𝑦𝑒",
          thumbnailUrl: img,
          sourceUrl: 'https://t.me/sarca_stics',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
