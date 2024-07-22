// As a business partner of this restaurant, i can fetch all of the data from the database in JSON format.

fetch('http://api.markiscafe.com:3000/users/emurphy04', {
    method: "GET"
}).then(body => {
    return body.json()
}).then(data => {
    console.log(data)
})

console.log('Data fetched!')