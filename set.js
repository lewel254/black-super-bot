/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUExV0l0VkxLOFFvb09vb1paK3hIcHRKQi9WdVVYV3BJT0EzbGE3N3oxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicktrMUtMS2pZVHlFVlMzN0VDT0xHU1V5MzFkd1I0eGsvSmNpQ1p4SXRWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ0V6T2dzN29CSnNwMTVUaHMzMHRCQUNndldTZVhRTFhpKzBDbXVUZm1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkTVBCMzU3RUpsT0lPSHJBNkpoOXVXU0h1dEI1YlBveUNGM1NSeXJMWlZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNcExaem5ucDI0YzhITUJobzY1eG90bU1CMU9kZm40MHo5dEI5djlrMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhhUjNNSVZTNWM3UWVZMXdlMlYwZzU5bHlnRGhoMTlzR0hqaktnSFFqUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VUL2lQTTRyQXI5cURjVlpzRnVueVlDVkJ5V3d0N2FUZ2xCTnlyZXdGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3E0SVBvTEpXRmR0Wlp1RnpTQUNwZ2dSMVdlV2lRbVhmemRiWnAzQlJHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpGVy84ZjVMK245N1dLWmlXRU5vRXJPTkFsKzgzdmZ3MnBuQU43Z2Rxd2IxeTEvK0lPVGg5NEVVMW00VCsxSVJuVUFEZ056SjduV1Zrb2VQNDdiY0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiIvaXRSV2h5STVEZGlYc0tTTGhnZzJjYmJWTDMvbDlsb01lWWtOZFB1TDRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODQ0MzExMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OTRBRTgxMDI0NzRFODczQ0VBRUVDQ0NGNjY2NkI5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2Mzk4MDA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTg0NDMxMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUMwNjhCQzBFMTlBMkRDREM4RUJBRTJGNEE5REU5QkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjM5ODAwOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY2lsUThsMGlUQ21PU0sybUotbVhBUSIsInBob25lSWQiOiIxMzc0NjNlYS0wYmEwLTQzNzctYWZkMy0xNTAzZDdmNTY5MjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielFyRnFhSEpDSnRyNm1vbnU1VTdiekFhTFBjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk4cUpaZEFJUkdSYVUyalVnMjZKbTZqTWZoRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZNDZCQVJCNiIsIm1lIjp7ImlkIjoiMjU0NzU4NDQzMTExOjc2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKYheGOr+KYvO+4juKEkuKYvO+4juKEkuKcqeKEsOKcq+KEleKZqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUttb004Q0VLUFczOEFHR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3lFWWh1Wk1hSG1uck9RUkQvU0g4TDBZUWYzZGhXNEk0U3JrcDJOVFBrTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQnZ1ajM1dXZ0dDlRS3BoS2lrdlpIUXg0MkdCUUdKajlHZFBQeHVvOVFhWmNwSE13RXBKcWk4MVVYUndCc0JTUXlkdTQ2bkxMei9zMVkzQmR0Q09sQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZoK2YrTmtnU0EvUEhWbThYM1NRN0xtVHJtak5qYUEvc0xHYnEwNFIwQThRM0h4ZjA5cFpHVDNIaThkL1FGcFlPNElnYUxnNnhhd1BrMDBha252YkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU4NDQzMTExOjc2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzaEdJYm1UR2g1cDZ6a0VRLzBoL0M5R0VIOTNZVnVDT0VxNUtkalV6NUQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDYzOTgwMDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVc5In0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '*';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254758443111';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/jxxwms.jpeg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'FALSE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
