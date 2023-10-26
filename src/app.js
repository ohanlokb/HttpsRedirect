const express = require('express')
const http = require('http');

const app = express()

//Redirect to Home '/'
app.get('*', (req,res)=>{
    res.redirect("https://" + req.headers.host + req.path);
})

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
    console.log(`HTTP Server running on port 80`);
});
