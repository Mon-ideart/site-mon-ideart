
// Gestion du formulaire de contact (page accueil)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert('Tous les champs doivent être remplis.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Veuillez entrer un email valide.');
      return;
    }

    alert('Message envoyé ! Merci, ' + name);
    event.target.reset();
  });
}

// Bouton retour (page article)
const backBtn = document.getElementById('back-btn');
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
