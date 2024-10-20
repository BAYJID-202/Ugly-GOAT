module.exports = {
  config: {
    name: "video",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "random video",
    longDescription: "",
    category: "random video",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/LwCRoNc.mp4"
   "https://i.imgur.com/eij16Fl.mp4"
   "https://i.imgur.com/VHp28xE.mp4"
"https://i.imgur.com/CjhleNq.mp4"
"https://i.imgur.com/a7EKaVa.mp4"
"https://i.imgur.com/W5wh9VR.mp4"
"https://i.imgur.com/V6NFTm8.mp4"
"https://i.imgur.com/DTXPOdG.mp4"
"https://i.imgur.com/p2vU8jM.mp4"
"https://i.imgur.com/LeLYj2k.mp4"
"https://i.imgur.com/ZKDSm3l.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 VIDEO __/😥❤️‍🩹 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐘𝐉𝐈𝐃」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
