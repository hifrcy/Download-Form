document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var favoriteTitle = document.getElementById("favoriteTitle").value;
  var comment = document.getElementById("comment").value;
  var rating = document.querySelector('input[name="rating"]:checked');

  if (name !== "" && validateEmail(email) && favoriteTitle !== "" && comment !== "" && rating !== null) {
    // Envoi du formulaire
    sendFeedback(name, email, favoriteTitle, comment, rating.value);
  } else {
    // Affichage d'une erreur si tous les champs ne sont pas remplis
    alert("Veuillez remplir tous les champs du formulaire.");
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendFeedback(name, email, favoriteTitle, comment, rating) {
  // Code pour envoyer le formulaire à votre serveur
  // Ajoutez ici votre code pour l'envoi des données du formulaire à l'adresse appropriée.
  // Une fois l'envoi terminé avec succès, affichez le lien de téléchargement.
  
  // Exemple de code pour afficher le lien de téléchargement après 2 secondes :
  setTimeout(function() {
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("downloadLink").style.display = "block";
  }, 2000);
}
