const url = "https://script.google.com/macros/s/AKfycbyU-KVI-yw3sieMm37UYEoEWzvXs9HjSFJfuxrCxP9MGFWkLP4/exec";

function testGS() {
fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",testGS);