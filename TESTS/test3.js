// as an employee of this restaurant i would like the ability to update allergy information

fetch('http://localhost:3000/items/99', {
    method: "PUT",
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

console.log('Entry updated!')

fetch('http://localhost:3000/items/99', {
    method: "GET"
}).then(body => {
    return body.json()
}).then(data => {
    console.log(data)
})