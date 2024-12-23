
import { readFileSync, writeFileSync } from 'node:fs';
// import { readFileSync } from 'node:fs';
// const http = require('node:http');
import * as http from 'node:http';
// const url = require('url');
// import url from 'node:url';
import * as url from 'node:url';
import { readFile, writeFile } from 'node:fs';
// import path from 'path';
// const __dirname = path.resolve();
const __dirname = import.meta.dirname;

//////////////////////////////////
// FILES

//synchronous code, also blocking code
// import { readFileSync } from 'node:fs';

// const textIn = readFileSync('./txt/input.txt', 'utf8');

// console.log(textIn);

// const textOut = `This is what we know about the Avocado: ${textIn}.\nCreated on ${Date.now()}`;

// writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

//Non-blocking asynchronous way, will have callback
// import { readFile, writeFile } from 'node:fs';
// readFile('./txt/start.txt', 'utf8' , (err, data1)=>{
//     // when there's error, test
//     if(err) return console.log('ERROR! lol')
//     readFile(`./txt/${data1}.txt`, 'utf8' , (err, data2)=>{
//         console.log(data2);
//         readFile('./txt/append.txt', 'utf8' , (err, data3)=>{
//             console.log(data3);

//             writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf8', err => {
// console.log('your file has been written')
//             });//since we're writing, only the error argument is required, since no data is read
            
//             });
        
//         });
//         // console.log(data1);

// });

// console.log('reading file...');

/////////////////////////////////////////////////////////////
//  SERVER

const data = readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');

    const dataObj = JSON.parse(data);
              
          
//creating an http server
const server = http.createServer((req, res) =>{
    // console.log(req);
    // console.log(req.url);
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('this is the OVERVIEW');
    }   
    else if(pathName === '/product'){
        res.end('this is PRODUCT');
    } else if(pathName === '/api'){

//         readFile(`${__dirname}/dev-data/data.json`, 'utf8', (err, data)=>{
// const productData= JSON.parse(data);
            // console.log(productData);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
        // }
    // );

        // res.end('API');
    }
    else{
        res.writeHead(404, {
             'content-type': 'text/html',
             'my-own-body': 'hello-world '
        });
        res.end('<h1>Page not found</h1>');
    }

    // res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to requests on port 8000');
});