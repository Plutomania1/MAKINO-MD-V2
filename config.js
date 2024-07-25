const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["2348120549697"];
global.ownertag = [""]; 
global.OwnerName =  "𝙱𝙴𝙻𝙸𝙴𝚅𝙴™️";
global.BotName = "𝙱𝙴𝙻𝙸𝙴𝚅𝙴™️";
global.packname = "𝙱𝙴𝙻𝙸𝙴𝚅𝙴™️";                             //Do not change.
global.author = "𝙱𝙴𝙻𝙸𝙴𝚅𝙴™️";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID |{"noiseKey":{"private":{"type":"Buffer","data":"GMAEM7mobXWRx2a3UhcEalj1+Qb2rToA8q3LF32d7U8="},"public":{"type":"Buffer","data":"g+MIouXl93WFV6nWPq5MUaD03zTpTc4tmyKFfENbc0w="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mNJfjpioO7HWB28YeMSyUessrlk1e8gAmLPWtWAj9nQ="},"public":{"type":"Buffer","data":"XNZnWbPOTLhGY0HoZFpuiwKPxaJuySJyBW/+rcrMlF8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MA47E60Ca44eYIXK1oOHHLK0I5bZbIkBOUuqH4r8fVo="},"public":{"type":"Buffer","data":"DDp8ZGXwa/4aafZCg370IRK6GR3k6QExWV6tD/kQVTo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YH6tFaTQJ6bbZ144kUlUCY+3U+oIDf3R7VVjCDOC6mw="},"public":{"type":"Buffer","data":"uSQi/R0jr+c5CFZEtTubLz29r9tQsYIpN1g7TnTx1SE="}},"signature":{"type":"Buffer","data":"1mtzUqDcPOgNeUOeQrChIMifhdvsNkXJXtxeOTA0oaqJ8fREDWzGUyLM9Vny+k0l7Nyc92u4Z8Wrbi0JWdLfgg=="},"keyId":1},"registrationId":203,"advSecretKey":"eKVPSVSyq/iQKelYan1ptuVNOyaR2qEIiSPpFQ/X0LQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"LM6r7xydSPeRsdRKLZBKZw","phoneId":"a2d384c9-ce19-42e5-9076-c4412fadefa2","identityId":{"type":"Buffer","data":"HNmW9Owovmdz7OMF43Di94BjR8c="},"registered":true,"backupToken":{"type":"Buffer","data":"x/d4tDhsjQZOe4G4bdew04nt92A="},"registration":{},"pairingCode":"BE9PE18M","me":{"id":"2348120549697:30@s.whatsapp.net"},"account":{"details":"CNiA9qUCENG2i7UGGAkgACgA","accountSignatureKey":"kzPghLn4XktDehxnPW4wgFVWfmTu1taEkn0+dmehM0c=","accountSignature":"4kM41VX+q87e0xnhge4mGGkKvwTwwsn7scjZ65MmOVKkD3k8wmZt1QSAYCYT4iQ6XBbeeRrRCM8Rx6gjO66IBA==","deviceSignature":"+IP5+l1cSgdLJsFoYLeD+6tSmRidZCzIvaEKSTCkIinpR+Csh68jv+YPPUTuAFrXPX708D+9RP4g0xnD4zZ/iA=="},"signalIdentities":[{"identifier":{"name":"2348120549697:30@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZMz4IS5+F5LQ3ocZz1uMIBVVn5k7tbWhJJ9PnZnoTNH"}}],"platform":"iphone","lastAccountSyncTimestamp":1721949021}| ``
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
