var api = "https://www.breakingbadapi.com/api/characters";
async function getData() {
    const response = await fetch(api)
    const data = await response.json()
    printData(data)
}                                                   
function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
    header.innerHTML += `
    <select class="form-control" onchange="getCharachter(this.value)">
    <option>choisir character</option>
     ${data.map(charactere =>`<option>${charactere.name}</option>` )}
    </select>
    `
        
}
 async function getCharachter(name) {
   const response = await fetch(`${api}?name=${name}`)
   const data = await response.json()
   
    content.innerHTML = `
        <h2>${data[0].name} (${data[0].nickname})</h2>
        <h4>${data[0].portrayed}</h4>
        <img src = "${data[0].img}" with = "250">        
        `
 }

getData ()