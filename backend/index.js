const express = require('express')
const cors=require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => console.log(('Hello World!')))

app.post('/test',(req,res)=>{
    console.log(req.body)
    res.status(200).send({t1:"test"})
})
app.post('/silly',(req,res)=>{
    res.status(200).send({res:`your silly url ${req.body.url}`})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))