
const express = require('express');

const app = express();

app.get('/health', (req,res)=>{
    res.status(200).json({
        status: "OK"
    });
});

app.listen(5000, ()=>{ //  should be same as container port
    console.log("Server running on port 8080");
});

module.exports = app;
