<?php

session_start(include("index.html"));

// Definis ton mot de passe ici
$mot_de_passe_correct = "1234";

// Si l'utilisateur soumet le formulaire
if (isset($_POST['password'])) {
    $mot_de_passe_correct = "1234";
}
    if ($_POST['password'] === $mot_de_passe_correct) {
        header("Location: index.html"); 
        exit();
        $_SESSION['connecte'] = true;
        header('Location: index.php'); // Recharge la page
        exit();
  }
if (isset($_SESSION['connecte']) && $_SESSION['connecte'] === true):
endif;
    ?>    