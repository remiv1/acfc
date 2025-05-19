<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email= $_POST["email"];
    $tel = $_POST["tel"];
    $message= $_POST["message"];

    $to = "aucollectionneur@yahoo.fr";
    $sujet = "Nouveau message depuis le formulaire de contact";
    $contenu = "Nom : $nom\nE-mail : $email\nTéléphone : $tel\n\nMessage :\n$message";

    mail($to, $sujet, $contenu);
    echo "Votre message a été envoyé avec succès. SUJET : $sujet, CONTENU : $contenu";
}
?>