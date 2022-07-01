//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {

    let res = await fetch(`https://docs-jojoapi.herokuapp.com/api/asupan/${command}?apikey=Syaa`)
    let json = await res.json()
    
    conn.sendFile(m.chat, json.result.url, '', `Asupannya nih`, m)
}
handler.help = ['hijaber', 'ukhty', 'santuy', 'bocil', 'cecan', 'rikagusriani', 'ghea']
handler.tags = ['asupan']
handler.command = /^(hijaber|ukhty|santuy|cecan|bocil|rikagusriani|ghea)$/i

handler.register = true

module.exports = handler
