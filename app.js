const express = require('express')
const app = express()
const port = 3000
const client = require('./dal/database.js')
const indexRouter = require("./routes/index.js")
app.use(express.static("public"));
app.use(express.json())

app.use('/', indexRouter)

app.listen(port, ()=>{
    console.log(`REST API is running on http://localhost:${port}/`)
})

client.connect()

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/items', (req, res) => {
    client.query(`select * from menu_items`, (err, result) => {
        if(!err){
            res.send(result.rows)
            items = result.rows
        }
    })
    client.end
})

app.get('/items/:id', (req, res) => {
    client.query(`select * from menu_items where id=${req.params.id}`, (err, result) => {
        if(!err){
            res.send(result.rows)
            items = result.rows
        } else {
            console.log(err.message, req.params.id)
        }
    })
    client.end
})

app.post('/items', (req, res) => {
    const item = req.body
    let query = `insert into menu_items(id,itemname,price,alergy)
                values(${item.id}, '${item.itemname}', ${item.price}, ${item.alergy})`
    client.query(query, (err, result) => {
        if(!err){
            res.send('Item added')
            console.log(req.body)
            items = result.rows
        } else {
            console.log(err.message, req.body)
        }
    })
    client.end
})

app.put('/items/:id', (req, res) => {
    let item = req.body
    let update = `update menu_items 
        set itemname = '${item.itemname}',
        price = ${item.price},
        alergy = ${item.alergy}
        where id = ${req.params.id}`
    
    client.query(update, (err, result) => {
        if(!err){
            res.send('Updated Item')
            console.log(req.body)
        } else {
            console.log(err.message, req.body)
        }
    })
    client.end
})

app.delete('/items/:id', (req, res) => {
    let query = `delete from menu_items where id=${req.params.id}`
    
    client.query(query, (err, result) => {
        if(!err){
            res.send('Deleted Item')
        } else {
            console.log(err.message, req.body)
        }
    })
    client.end
})

