// Otvaranje modalnih prozora
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


var btn=document.getElementsByClassName('.Pozdrav');
btn.addEventListener('click',)
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
// Zatvaranje modalnih prozora klikom 
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modalish.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});
// Zatvaranje modalnih prozora klikom na gumb za zatvaranje
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modalish');
    closeModal(modal);
  });
});
// Funkcija za otvaranje modalnog prozora
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
// Funkcija za zatvaranje modalnog prozora
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
// Slanje forme
document.getElementById('send-button').addEventListener('click', function () {
  var fullName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var importance = document.querySelector('select[name=s1]').value;
  var receiveNewsletter = document.getElementById('obavijesti').checked;
  var message = document.getElementById('poruka').value;

  var form = document.createElement('form');
  form.action = 'https://www.fulek.com/mvc/supit/project-contact-form';
  form.method = 'POST';

  var params = {
    o: '',
    FullName: fullName,
    Email: email,
    Importance: importance,
    ReceiveNewsletter: receiveNewsletter,
    Message: message
  };

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = params[key];
      form.appendChild(input);
    }
  }

  document.body.appendChild(form);
  form.submit();
});


// Zatvaranje modalnog prozora klikom na gumb za zatvaranje

const closeButton = document.querySelector('[data-close-button]');
const modalish = document.getElementById('modalish');

closeButton.addEventListener('click', () => {
  modalish.style.display = 'none';
});



const text = "BUDI IZVRSTAN U ONOME ŠTA VOLIŠ";// Tekst koji se animira
let broj = 0;   // Varijabla koja prati broj animiranih znakova

function typingAnimation() {
  const typing = document.getElementById("textprekovidea");     // Dohvaćanje elementa sa ID-om "textprekovidea"

  if (!typing) {
    return;        // Ako element nije pronađen, prekini izvršavanje funkcije
  }

  const lines = text.substring(0, broj).split(/\n|<br>/);   // Razbijanje teksta na redove do trenutnog broja animiranih znakova
// Postavljanje animiranih linija teksta unutar elementa "typing"
  typing.innerHTML = lines.map((line, broj) => {
    const isLastLine = broj === lines.length - 1;
    const lineBreak = isLastLine ? "" : "<br>";
    return `${line}${lineBreak}`;
  }).join("");

  
  typing.style.zIndex = "1";    // Postavljanje z-index vrijednosti elementa "typing" na 1

  const cursor = typing.querySelector(".cursor"); // Dohvaćanje elementa s klasom "cursor" unutar elementa "typing"
  if (!cursor) {
     // Ako element nije pronađen, stvori novi element za kursor
    const newCursor = document.createElement("span");
    newCursor.classList.add("cursor", "blink-cursor");
    typing.insertAdjacentElement("beforeend", newCursor);    // Dodavanje kursora na kraj elementa "typing"
  }

  broj++;      // Povećanje broja animiranih znakova

  if (broj > text.length) {
          // Ako su svi znakovi animirani
    const zaiskriText = document.querySelector(".textispodvidea2");       // Dohvaćanje elementa s klasom "textispodvidea2"
    setTimeout(function() {
      zaiskriText.classList.remove("hidden");  // Uklanjanje klase "hidden" s elementa "zaiskriText"
      setTimeout(typingAnimation, 100);     // Ponovno pokretanje animacije nakon određenog vremenskog razmaka
    }, 500);
    return;    // Prekid izvršavanja funkcije
  } 

  setTimeout(typingAnimation, 50);  // Ponovno pokretanje animacije nakon određenog vremenskog razmaka
}

typingAnimation();    // Pokretanje animacije teksta

document.addEventListener("DOMContentLoaded", function() {
  let navUsernameElement = document.getElementById("navUsername");
  let navIconElement = document.querySelector(".nav-link i");

  let username = sessionStorage.getItem("username");
  if (navUsernameElement && navIconElement) {
    if (username) { // Ako postoji korisničko ime, prikaži odjavu i ikonu za odjavu
      navUsernameElement.textContent = "Odjavi " + username;
      navIconElement.textContent = "power_settings_new";

      let navRightLinks = document.querySelector(".nav-right");
      if (navRightLinks) {
        navRightLinks.style.display = "none";   // Sakrij desne navigacijske linkove
      }
    } else {

      // Ako korisničko ime ne postoji, prikaži prijavu i ikonu za prijavu
      navUsernameElement.textContent = "Prijavi se";
      navIconElement.textContent = "account_circle";

      let navRightLinks = document.querySelector(".nav-right");
      if (navRightLinks) {
        navRightLinks.style.display = "flex";  // Prikazi desne navigacijske linkove
      }
    }
  }

  let logoutButton = document.getElementById("navUsername");
  if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
      event.preventDefault(); 
      if (username) { // Ako postoji korisničko ime, izbriši ga iz sesije i preusmjeri na /index.html
        sessionStorage.removeItem("username");
        window.location.href = "/index.html";
      } else {  

        // Ako korisničko ime ne postoji, preusmjeri na /HTML/HTML2.html

        window.location.href = "/HTML/HTML2.html";
      }
    });
  }

 
  let newNavLink = document.createElement("li");
  newNavLink.className = "nav-item";
  newNavLink.innerHTML = `<a class="nav-link" href="/HTML/HTML11.html">
                            <i class="material-icons" style="font-size:20px;color:rgb(0, 136, 255);">menu_book</i>
                            <div class="navtext">Nastavni plan</div>
                          </a>`;

  let navItemNovosti = document.querySelector(".nav-item:nth-child(4)");
  if (navItemNovosti) {
    navItemNovosti.insertAdjacentElement("afterend", newNavLink);
  }


  if (!username && newNavLink.parentNode) {
    newNavLink.parentNode.removeChild(newNavLink);   // Ako korisničko ime ne postoji, ukloni novi navigacijski link
  }
});
