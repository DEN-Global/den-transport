import {mkdir,copyFile} from 'node:fs/promises'; await mkdir('dist',{recursive:true});for(const f of ['index.html','app.js','style.css'])await copyFile(f,`dist/${f}`);
