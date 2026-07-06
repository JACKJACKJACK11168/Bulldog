const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const base = 'c:/Users/xiao/CodeBuddy/20260625165428';

// 模型文件 → models/
const models = ['french_dog.glb', 'french_dog.blend', 'french_dog.obj', 'french_dog.mtl',
                'zhuren.glb', 'basketballzhuren.glb', 'transition_deco.glb'];
// 房间文件 → rooms/ (保留blend/gib原文件)
const rooms = ['bathroom.glb', 'bathroom.blend',
               'bedroom.glb', 'bedroom.blend', 'bedroom.obj', 'bedroom.mtl',
               'kitchen.glb', 'kitchen.blend',
               'livingroom.glb', 'livingroom.blend', 'livingroom.obj', 'livingroom.mtl',
               'mat0_c.jpg'];

function gitMove(file, destDir) {
    const src = path.join(base, file);
    const dest = path.join(base, destDir, file);
    if (fs.existsSync(src)) {
        fs.renameSync(src, dest);
        execSync(`cd /d "${base}" && git add "${file}" "${destDir}/${file}"`, {stdio:'pipe'});
        console.log(`Moved: ${file} -> ${destDir}/`);
    }
}

models.forEach(f => gitMove(f, 'models'));
rooms.forEach(f => gitMove(f, 'rooms'));

// 移动 server.js 和 start.bat 到根目录（已在根目录，不动）
console.log('Done!');
