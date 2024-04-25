function registerUser(email, password) {
  var data = {
    username: email,
    password: password
  };
  // Slanje POST zahtjeva s podacima o korisniku na registracijski API
  fetch("https://www.fulek.com/data/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      if (result.isSuccess) {
        alert("Registracija uspješna. Molimo prijavite se."); // Obavijest o uspješnoj registraciji
      } else {
        var errorMessages = result.errorMessages;
        alert("Registracija nije uspjela. Greška: " + errorMessages.join(", ")); // Obavijest o neuspješnoj registraciji
      }
    })
    .catch(error => {
      console.error("Greška prilikom registracije:", error); // Obavijest o grešci prilikom registracije
    });
}
