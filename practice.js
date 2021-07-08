import http from 'http';
import fs from 'fs';
import os from 'os'




http.createServer((req,res) => {
    fs.readFile('./practice.html', (err,data) => {
        if (err) {
            throw err;
        }
        
        res.end(data) // 읽은 html 파일 버퍼를 있는 그대로 클라이언트에게 전송
    })
    
}).listen(3000,() => console.log('3000 listening!'));
