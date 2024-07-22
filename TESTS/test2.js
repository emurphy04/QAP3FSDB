// as a manager of this restaurant, i can add items to our menu database

fetch('http://localhost:3000/items', {
    method: "POST",
    body: JSON.stringify({
        "id": 99,
        "itemname" : "Item",
        "price": 99.99,
        "alergy": false
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})

console.log('Entry added!')

fetch('http://localhost:3000/items', {
    method: "GET"
}).then(body => {
    return body.json()
}).then(data => {
    console.log(data)
})