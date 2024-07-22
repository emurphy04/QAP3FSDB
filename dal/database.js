const {Pool, Client} = require("pg")

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Menu",
    password: "admin",
    port: "5432"
})

client.query(`select * from menu_items`, (err, res) => {
    if(!err){
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    client.end;
})

module.exports = client
