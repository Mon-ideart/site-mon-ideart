
// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if(name && email && message) {
        alert('Message envoyé ! Merci, ' + name);
        event.target.reset(); // Réinitialiser le formulaire après envoi
    } else {
        alert('Tous les champs doivent être remplis.');
    }
});
