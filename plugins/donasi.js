let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/Dana [089603042257]
│ • Gopay [085363810820]
│ • Saweria https://saweria.co/haikalofc
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
