module.exports = {
  config: {
    name: "bayjid",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "bayjid",
    longDescription: "",
    category: "busy",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/uwy9Sjb.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「BOSS BAYJID BUSY 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐘𝐉𝐈𝐃」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
