const fs = require('fs');

// 替换 index.html 中的路径
let i = fs.readFileSync('index.html', 'utf8');
const replaces = [
    ["'bedroom.glb'", "'rooms/bedroom.glb'"],
    ["'livingroom.obj'", "'rooms/livingroom.obj'"],
    ["'livingroom.mtl'", "'rooms/livingroom.mtl'"],
    ["'kitchen.glb'", "'rooms/kitchen.glb'"],
    ["'bathroom.glb'", "'rooms/bathroom.glb'"],
    ["'french_dog.glb'", "'models/french_dog.glb'"],
    ["'transition_deco.glb'", "'models/transition_deco.glb'"],
    ["'zhuren.glb'", "'models/zhuren.glb'"],
];
replaces.forEach(([old, neu]) => { i = i.split(old).join(neu); });
fs.writeFileSync('index.html', i);
console.log('index.html: ' + replaces.filter(([o]) => i.includes(o.split("'")[1])).length + ' paths not replaced');

// 替换 basketball_game.html 中的路径
let b = fs.readFileSync('basketball_game.html', 'utf8');
b = b.split("'french_dog.glb'").join("'models/french_dog.glb'");
b = b.split("'basketballzhuren.glb'").join("'models/basketballzhuren.glb'");
b = b.split("'zhuren.glb'").join("'models/zhuren.glb'");
fs.writeFileSync('basketball_game.html', b);
console.log('basketball_game.html updated');

console.log('All paths updated!');
