// JS global pour le site Berkane Immo

function showConfirmation(event) {
  event.preventDefault();
  const confirmation = document.getElementById('confirmation');
  if (confirmation) {
    confirmation.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Gestion du formulaire de contact
  const form = document.querySelector('.contact-container form');
  if (form) {
    form.addEventListener('submit', showConfirmation);
  }

  // Fonction pour rediriger vers accueil.html
  function redirectToAccueil(event) {
    event.preventDefault();
    window.location.href = 'accueil.html';
  }

  // Gestion du formulaire de login (redirection vers accueil.html)
  if (window.location.pathname.includes('login.html')) {
    const loginForm = document.querySelector('.form-block');
    if (loginForm) {
      loginForm.addEventListener('submit', redirectToAccueil);
    }
  }

  // Gestion du formulaire de signin (redirection vers accueil.html)
  if (window.location.pathname.includes('signin.html')) {
    const signinForm = document.querySelector('.form');
    if (signinForm) {
      signinForm.addEventListener('submit', redirectToAccueil);
    }
  }
});
