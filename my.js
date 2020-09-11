const url = "https://script.google.com/macros/s/AKfycbyU-KVI-yw3sieMm37UYEoEWzvXs9HjSFJfuxrCxP9MGFWkLP4/exec";

function testGS() {
fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });
}

function addGS() {
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({First:"Jake",Telephone:"555-000009",Last:"Newperson"}) // body data type must match "Content-Type" header
      });
}
    

    
document.getElementById("btn2").addEventListener("click",addGS);
document.getElementById("btn").addEventListener("click",testGS);
