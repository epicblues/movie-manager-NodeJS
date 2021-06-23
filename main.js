import {createServer} from 'http'
import url from 'url'

createServer((req,res)=> {
    const parsedUrl = url.parse(req.url)
    console.log(parsedUrl)
    if (req.url === '/') {
        res.write('<h1>Movie Container Node</h1>')
        res.end()
        return
    }
    res.write('<h1>Wrong Url!</h1>')
    res.end()
    
}).listen(3000, () => {
    console.log('3000 listening!')
})