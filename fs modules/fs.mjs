#!/usr/bin/env node
import { writeFile } from 'fs/promises';
import {readFile} from 'fs/promises';

const filepath = new URL('./index.html',import.meta.url);
let data = await readFile(filepath,{encoding:'utf-8'});
console.log(data);

const obj = {
    title : "This is title",
    body : "This is body"
}

Object.entries(obj).forEach((elem) => {
    data = data.replace(`{${elem[0]}}`,elem[1]);
})

await writeFile(filepath,data);

data = await readFile(filepath,{encoding:'utf-8'});
console.log(data);