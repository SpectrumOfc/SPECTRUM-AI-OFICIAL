/*
《✧》DERECHOS RESERVADOS DEL AUTOR 《✧》
- DavidChian (@David-Chian)
*/

const _0x152748=_0x3fee;function _0x3fee(_0x521f33,_0x2861cc){const _0x4f9827=_0x4f98();return _0x3fee=function(_0x3fee54,_0x30fdeb){_0x3fee54=_0x3fee54-0x166;let _0x1efa2e=_0x4f9827[_0x3fee54];return _0x1efa2e;},_0x3fee(_0x521f33,_0x2861cc);}(function(_0x49c817,_0x4aeb76){const _0x5b1b65=_0x3fee,_0x4475e0=_0x49c817();while(!![]){try{const _0x243725=parseInt(_0x5b1b65(0x172))/0x1+parseInt(_0x5b1b65(0x181))/0x2+-parseInt(_0x5b1b65(0x1a0))/0x3+-parseInt(_0x5b1b65(0x17e))/0x4+parseInt(_0x5b1b65(0x16a))/0x5*(parseInt(_0x5b1b65(0x199))/0x6)+parseInt(_0x5b1b65(0x18b))/0x7*(-parseInt(_0x5b1b65(0x174))/0x8)+parseInt(_0x5b1b65(0x192))/0x9;if(_0x243725===_0x4aeb76)break;else _0x4475e0['push'](_0x4475e0['shift']());}catch(_0x47d180){_0x4475e0['push'](_0x4475e0['shift']());}}}(_0x4f98,0x1d817));function _0x4f98(){const _0x251808=['Error:','characters','《✧》Ocurrió\x20un\x20error\x20al\x20procesar\x20tu\x20solicitud.\x20Intenta\x20de\x20nuevo\x20mas\x20tarde.\x20','./src/completado.jpg','7RVsHuS','values','¡Nuevo\x20personaje!','includes','✧\x20Error\x20al\x20leer\x20package.json:','✧\x20Este\x20comando\x20solo\x20es\x20disponible\x20en\x20YaemoriBot-MD\x0a◇\x20https://github.com/DanielDiod/Ai-Otho','entries','121140ekPROO','value','sendMessage','readFileSync','Estado:\x20Libre','git+https://github.com/DanielDiod/Ai-Otho.git','✧\x20Error\x20al\x20leer\x20characters.json:','318kpVNDO','register','floor','find','error','\x20minutos\x20','url','551802nOocgV','tags','existsSync','writeFileSync','*\x0a✰\x20Valor:\x0a>\x20»\x20','\x20*WFCoins*!\x0a✰\x20Estado:\x0a>\x20»\x20','getTime','《✧》Felicidades,\x20todos\x20los\x20personajes\x20han\x20sido\x20obtenidos.\x20¡Pronto\x20habrá\x20mas\x20waifus\x20para\x20recolectar!','20785GcICMr','┏━━━━━━━━━⪩\x0a┃˚₊\x20·\x20͟͟͞͞➳❥\x20𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒\x0a┃⏤͟͟͞͞𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄\x20𝐎𝐁𝐓𝐔𝐕𝐈𝐃𝐎\x0a┗━━━━━━━━━⪩\x0a\x0a✰\x20Nombre:\x0a>\x20»\x20*','help','《✧》Debes\x20esperar\x20*','usuarios','PHOTO','length','image/jpeg','128435wLQrec','✧\x20Error\x20al\x20leer\x20data.json:','376552qdIumc','gacha','./src/JSON/characters.json','stringify','utf-8','name','./package.json','sender','Estado:\x20Ocupado\x20por\x20','\x0a\x0a*✰\x20Identificacion:*\x0a<id:','797620QJbDlW','chat','personajesReservados','378094iJHZBm','random','parse','filter','some','data.json'];_0x4f98=function(){return _0x251808;};return _0x4f98();}import _0x52582c from'fs';import{v4 as _0x442868}from'uuid';const completadoImage=_0x152748(0x18a),obtenerDatos=()=>{const _0x4f5941=_0x152748;try{return _0x52582c[_0x4f5941(0x1a2)](_0x4f5941(0x186))?JSON[_0x4f5941(0x183)](_0x52582c[_0x4f5941(0x195)]('data.json',_0x4f5941(0x178))):{'usuarios':{},'personajesReservados':[]};}catch(_0x5f5bd6){return console[_0x4f5941(0x19d)](_0x4f5941(0x173),_0x5f5bd6),{'usuarios':{},'personajesReservados':[]};}},guardarDatos=_0x442381=>{const _0x3d2fdf=_0x152748;try{_0x52582c[_0x3d2fdf(0x1a3)]('data.json',JSON[_0x3d2fdf(0x177)](_0x442381,null,0x2));}catch(_0x520efc){console[_0x3d2fdf(0x19d)]('✧\x20Error\x20al\x20escribir\x20en\x20data.json:',_0x520efc);}},reservarPersonaje=(_0x393906,_0x299db8)=>{const _0x2c6058=_0x152748;let _0x2e5ff7=obtenerDatos();_0x2e5ff7[_0x2c6058(0x180)]['push']({'userId':_0x393906,..._0x299db8}),guardarDatos(_0x2e5ff7);},obtenerPersonajes=()=>{const _0x215b11=_0x152748;try{return JSON[_0x215b11(0x183)](_0x52582c[_0x215b11(0x195)](_0x215b11(0x176),_0x215b11(0x178)));}catch(_0x21cf8a){return console[_0x215b11(0x19d)](_0x215b11(0x198),_0x21cf8a),[];}};let cooldowns={},handler=async(_0x4317d9,{conn:_0x56ae27})=>{const _0x7878b=_0x152748;try{let _0x5778f5=_0x4317d9[_0x7878b(0x17b)],_0x2e566a=new Date()[_0x7878b(0x168)](),_0x5364f5=0xa*0x3c*0x3e8,_0x232801=cooldowns[_0x5778f5]||0x0,_0x1846ce=_0x2e566a-_0x232801;if(_0x1846ce<_0x5364f5){let _0x37015a=_0x5364f5-_0x1846ce,_0xf5586=Math[_0x7878b(0x19b)](_0x37015a/(0x3e8*0x3c)),_0x547c1f=Math[_0x7878b(0x19b)](_0x37015a%(0x3e8*0x3c)/0x3e8),_0x3828e4=_0x7878b(0x16d)+_0xf5586+_0x7878b(0x19e)+_0x547c1f+'\x20segundos*\x20para\x20usar\x20*#rw*\x20de\x20nuevo.';await _0x56ae27[_0x7878b(0x194)](_0x4317d9[_0x7878b(0x17f)],{'text':_0x3828e4});return;}const _0x1e5636=()=>{const _0xe8f7ff=_0x7878b;try{const _0x438ed0=JSON['parse'](_0x52582c[_0xe8f7ff(0x195)](_0xe8f7ff(0x17a),_0xe8f7ff(0x178)));if(_0x438ed0[_0xe8f7ff(0x179)]!=='Ai-Otho')return![];if(_0x438ed0['repository'][_0xe8f7ff(0x19f)]!==_0xe8f7ff(0x197))return![];return!![];}catch(_0x2ed7b8){return console[_0xe8f7ff(0x19d)](_0xe8f7ff(0x18f),_0x2ed7b8),![];}};if(!_0x1e5636()){await _0x56ae27[_0x7878b(0x194)](_0x4317d9['chat'],_0x7878b(0x190),_0x4317d9,rcanal);return;}let _0x38d98c=obtenerDatos(),_0xdffdcb=obtenerPersonajes(),_0x31c4ba=_0xdffdcb[_0x7878b(0x184)](_0x1b2b89=>{const _0xc95cf2=_0x7878b;let _0x2b959d=Object[_0xc95cf2(0x18c)](_0x38d98c[_0xc95cf2(0x16e)])[_0xc95cf2(0x185)](_0x191289=>_0x191289[_0xc95cf2(0x188)][_0xc95cf2(0x18e)](_0x1b2b89[_0xc95cf2(0x19f)]));return!_0x2b959d;});if(_0x31c4ba['length']===0x0){await _0x56ae27[_0x7878b(0x194)](_0x4317d9['chat'],{'image':{'url':completadoImage},'caption':_0x7878b(0x169)});return;}const _0x527ec8=_0x31c4ba[Math['floor'](Math[_0x7878b(0x182)]()*_0x31c4ba[_0x7878b(0x170)])],_0x38c6fe=_0x442868();let _0x5a10d8=_0x38d98c[_0x7878b(0x180)][_0x7878b(0x19c)](_0x20baf7=>_0x20baf7['url']===_0x527ec8[_0x7878b(0x19f)]),_0x3de11d=Object[_0x7878b(0x191)](_0x38d98c[_0x7878b(0x16e)])[_0x7878b(0x19c)](([_0x3cfa37,_0x31de8f])=>_0x31de8f[_0x7878b(0x188)][_0x7878b(0x18e)](_0x527ec8[_0x7878b(0x19f)])),_0x18febc=_0x3de11d?_0x7878b(0x17c)+_0x3de11d[0x1][_0x7878b(0x179)]:_0x7878b(0x196);const _0x49dbee=_0x7878b(0x16b)+_0x527ec8[_0x7878b(0x179)]+_0x7878b(0x166)+_0x527ec8[_0x7878b(0x193)]+_0x7878b(0x167)+_0x18febc+_0x7878b(0x17d)+_0x38c6fe+'>';await _0x56ae27[_0x7878b(0x194)](_0x4317d9[_0x7878b(0x17f)],{'image':{'url':_0x527ec8[_0x7878b(0x19f)]},'caption':_0x49dbee,'mimetype':_0x7878b(0x171),'contextInfo':{'mentionedJid':_0x3de11d?[_0x3de11d[0x0]]:[],'externalAdReply':{'showAdAttribution':!![],'title':_0x7878b(0x18d),'body':dev,'thumbnailUrl':_0x527ec8[_0x7878b(0x19f)],'sourceUrl':redes,'previewType':_0x7878b(0x16f),'mediaType':0x1,'renderLargerThumbnail':![]}}}),!_0x3de11d&&reservarPersonaje(_0x5778f5,{..._0x527ec8,'id':_0x38c6fe}),cooldowns[_0x5778f5]=_0x2e566a;}catch(_0xcaf889){console[_0x7878b(0x19d)](_0x7878b(0x187),_0xcaf889),await _0x56ae27[_0x7878b(0x194)](_0x4317d9['chat'],{'text':_0x7878b(0x189)+_0xcaf889});}};handler[_0x152748(0x16c)]=['rw'],handler[_0x152748(0x1a1)]=[_0x152748(0x175)],handler['command']=['roll','rw'],handler[_0x152748(0x19a)]=!![];export default handler;