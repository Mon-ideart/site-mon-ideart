
// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
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

// Gestion du menu burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

                    
