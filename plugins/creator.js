const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;febri;;;'
                    + 'FN:febri\n' // full name
                    + 'item1.X-ABLabel:Mau masukin bot ke gc Lu chat Gw\n'
                    + 'URL;Web gwejh: doujindesu.xxx\n'
                    + 'EMAIL;Email Owner: febrieka8800@gmail.com\n'
                    + 'ORG:Lord febri;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=818076446361:+818076446361\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lol Animals', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler




