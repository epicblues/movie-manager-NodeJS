import http from 'http';

const parseCookies = (cookie = '') => 
    {console.log(cookie.split(';'));
        return cookie
        .split(';')
        .map(v=>v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});
    }

http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, {'Set-Cookie': 'mycookie=test;kms=godlike'});
    res.end('hello Cookie');
}).listen(3000, () => {
    console.log('3000 listening!');
});


    