import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist/fonts',{recursive:true});
for(const f of ['index.html','app.js','style.css','network-mobility.css','theme-polish.css'])await copyFile(f,`dist/${f}`);
for(const weight of [400,500,600,700])await copyFile(`../den-shared/node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff2`,`dist/fonts/inter-${weight}.woff2`);

await copyFile('../den-shared/src/theme-init.js','dist/den-theme.js');

for(const file of ['den-background.js','den-background.css','fruit-market.jpg','syne-latin-700-normal.woff2','plus-jakarta-sans-latin-400-normal.woff2','plus-jakarta-sans-latin-600-normal.woff2'])await copyFile('../den-shared/src/'+file,'dist/'+file);
