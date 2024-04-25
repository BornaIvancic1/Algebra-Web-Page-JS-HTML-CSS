let flex = document.querySelector(".flex");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  let user = document.getElementById("text1").value; // Dohvaćanje vrijednosti unosa korisničkog imena
  let pass = document.getElementById("text2").value; // Dohvaćanje vrijednosti unosa lozinke
  loginUser(user, pass); // Pozivanje funkcije za prijavu korisnika
});

function loginUser(email, password) {
  var data = {
    username: email, // Postavljanje korisničkog imena u objekt
    password: password // Postavljanje lozinke u objekt
  };

  fetch("https://www.fulek.com/data/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data) // Slanje podataka u obliku JSON-a
  })
    .then(response => response.json()) // Parsiranje odgovora kao JSON
    .then(result => {
      if (result.isSuccess) { // Provjera uspješnosti prijave
        var token = result.data.token; // Dohvaćanje tokena iz odgovora
        localStorage.setItem("jwtToken", token); // Spremanje tokena u lokalno pohranjivanje
        var username = result.data.username; // Dohvaćanje korisničkog imena iz odgovora
        alert("Prijava uspješna");
        redirectToIndexPage(username); // Preusmjeravanje na stranicu index.html
      } else {
        var errorMessages = result.errorMessages; // Dohvaćanje poruka o grešci iz odgovora
        alert("Prijava nije uspjela. Greška: " + errorMessages.join(", "));
      }
    })
    .catch(error => {
      console.error("Greška pri prijavi:", error);
    });
}

function redirectToIndexPage(username) {
  var token = localStorage.getItem("jwtToken"); // Dohvaćanje tokena iz lokalnog pohranjivanja
  
  sessionStorage.setItem("username", username); // Spremanje korisničkog imena u privremeno pohranjivanje
  sessionStorage.setItem("jwtToken", token); // Spremanje tokena u privremeno pohranjivanje
  window.location.href = "../index.html"; // Preusmjeravanje na stranicu index.html
}
