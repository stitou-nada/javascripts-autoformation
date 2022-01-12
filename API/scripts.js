// premier etape
// fetch("https://www.breakingbadapi.com/api/")
// .then(function (response) {
//     return response.json()
// }) 
// .then (function (data) {
//     console.log(data)
// })

// deuxiem etape
  async function get() {
     var response = await fetch("https://www.breakingbadapi.com/api/") //await : hia stena
     var data = await response.json()
     console.log(data)
 }
 get()