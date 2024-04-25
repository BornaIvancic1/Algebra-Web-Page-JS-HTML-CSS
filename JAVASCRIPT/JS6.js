$('[data-fancybox="mygallery"]').fancybox({
  buttons: [
    "zoom",        // Gumb za zumiranje
    "slideShow",   // Gumb za prikaz slajdova
    "fullScreen",  // Gumb za prikaz na cijelom zaslonu
    "thumbs",      // Gumb za prikaz sličica
    "close"        // Gumb za zatvaranje
  ],
  arrows: true,                // Prikazivanje strelica za navigaciju unutar Fancyboxa
  clickOutside: true,          // Zatvaranje Fancyboxa klikom izvan njega
  clickSlide: false,           // Omogućavanje promjene slajda klikom na sadržaj Fancyboxa
  transitionEffect: "slide",   // Efekt prijelaza 
  transitionDuration: 500,     // Trajanje efekta prijelaza u milisekundama
  autoSize: true               // Automatsko prilagođavanje veličine Fancyboxa veličini zaslona
});
// Ovo je js za galeriju slika