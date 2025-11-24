
// Gestion du formulaire de contact
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
      alert('Message envoyé ! Merci, ' + name);
      event.target.reset();
    } else {
      alert('Tous les champs doivent être remplis.');
    }
  });
}
