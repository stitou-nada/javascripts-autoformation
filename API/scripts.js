
fetch("https://www.breakingbadapi.com/api/characters")
.then(function (response) {
    return response.json()
}) 
.then (function (data) {
    console.log(data)
})


