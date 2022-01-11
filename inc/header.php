<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="<?php echo ROOTDIR; ?>asset/css/styles.css">
    <title>J3M Analyste Tram Normandie</title>
</head>
<body>


<header id="header">
    <nav id="wrap1">
        <div class="logo_nav">
           <a href="<?php echo ROOTDIR; ?>index.php"><img src="<?php echo ROOTDIR; ?>asset/img/logo.svg" alt="logo du site"></a> 
        </div>
        <div class="header_btn">
            <a href="#infos">Qui</a>
            <a href="#where">Où</a>
            <?php if(isLogged()){ ?>
            <a href="<?php echo ROOTDIR; ?>deconnexion.php">Déconnexion</a>
            <?php }else{ ?>
            <a href="<?php echo ROOTDIR; ?>auth/inscription.php">Inscription</a>
            <a href="<?php echo ROOTDIR; ?>auth/connexion.php">Connexion</a>
            <?php } ?>
        </div>
    </nav>
</header>
