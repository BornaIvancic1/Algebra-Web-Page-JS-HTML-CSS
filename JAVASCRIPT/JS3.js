// Dohvati sve elemente s klasom 'textva'
const textElements = document.querySelectorAll('.textva');

// Za svaki textElement, stvori observer-a za praćenje njegove vidljivosti
textElements.forEach(textElement => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Ako je element vidljiv u pregledniku
      if (entry.isIntersecting) {
        textElement.classList.add('on-screen'); // Dodaj klasu 'on-screen' elementu
      } else {
        textElement.classList.remove('on-screen'); // Ukloni klasu 'on-screen' s elementa
      }
    });
  });

  // Započni promatranje vidljivosti elementa
  observer.observe(textElement);
});
