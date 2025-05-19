//Listener sur les boutons acheter
window.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionnez tous les boutons "acheter"
    const buttons = document.querySelectorAll('.detail');

    // Ajoutez un écouteur d'événements à chaque bouton d'achat
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const conteneurFlou = document.getElementById('conteneur-flou');
            conteneurFlou.style.display = 'flex';
        });
    });
    // Ajoutez un écouteur d'événements au bouton de fermeture
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('conteneur-flou').style.display = 'none';
    });
});

// Fonction pour créer ou mettre à jour un cookie
function setCookie(nom, valeur, joursExpiration) {
    var date = new Date();
    date.setTime(date.getTime() + (joursExpiration * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = nom + "=" + valeur + ";" + expires + ";path=/";
}
  
// Fonction pour obtenir la valeur d'un cookie
function getCookie(nom) {
    var name = nom + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
// Fonction pour ajouter un produit au panier (cookie)
function ajouterAuPanier(produit) {
    var panier = getCookie('panier');
    panier = panier ? JSON.parse(panier) : [];
    panier.push(produit);
    setCookie('panier', JSON.stringify(panier), 7);
}
/*  
// Ajoute un écouteur d'événement au bouton
document.getElementById('ok').addEventListener('click', function() {
    // Ici, récupérez les détails du produit choisi
    var produitChoisi = { id: '123', nom: 'Produit', prix: '19.99' };
    ajouterAuPanier(produitChoisi);
});
  
// Fonction pour afficher le panier
function afficherPanier() {
    var panier = getCookie('panier');
    panier = panier ? JSON.parse(panier) : [];
    // Ici, mettez à jour votre panier HTML avec les éléments du panier
    console.log(panier); // Pour l'exemple, nous affichons simplement le panier dans la console
}
*/