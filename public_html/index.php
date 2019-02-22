<?php

ini_set( 'session.cookie_httponly', 1 );

session_start();



?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Hjem - Odense Kommune</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="libs/bootstrap-4.3.1-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="css/style.css" rel="stylesheet" type="text/css">
    </head>
    <body data-spy="scroll" data-target=".navbar" data-offset="50">

        <div class="main-wrapper">

            <!-- Navigation bar -->
            <nav id="main-navbar" class="navbar fixed-top navbar-expand-lg navbar-dark ">
                <a class="navbar-brand" href="#home">Odense Kommune</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto scrollspy-enabled">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Hjem</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#news">Nyheder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">Om</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Kontakt</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#login-modal">Log ind</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Home Jumbotron -->
            <div id="home" style="margin-top: 50px">
                <div class="jumbotron jumbotron-fluid" style="margin-bottom:0;">
                    <div class="container">
                        <h1 class="display-3">Velkommen</h1>
                        <p class="lead">Det her er Odense Kommunes nye hjemmeside til styring af vores nye indeklima IT system.</p>
                    </div>
                </div>
            </div>

            <!-- About website -->
            <div id="about" class="bg-warning section">
                <div class="container">
                    <h1>Om</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>
            </div>

            <!-- News cards -->
            <div id="news" class="section" style=" background-color: #e9ecef" >
                <div class="container">
                    <h2>Relevante nyheder</h2>
                    <div class="card-deck">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Nyt IT system skaber...</h4>
                                <p class="card-text">For nyligt har Odense Kommune fået nyt IT system til styring af deres indeklima.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Interview: Jette fra HR</h4>
                                <p class="card-text">"Jeg er glad for det nye indeklima IT system, der er i hvert fald altid en dejlig temperatur." - Jette fra HR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact form -->
            <div id="contact" class="bg-danger section">
                <div class="container">
                    <h1>KONTAKT</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>
            </div>

        </div>

        <!-- Modal -->
        <div class="modal" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="login-modal-label">Log ind til Indeklima</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="POST">
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="username-input">Brugernavn (Påkrævet)</label>
                                <input type="text" class="form-control" name="username-input" id="username-input" placeholder="Brugernavn" required="required" value="test">
                            </div>
                            <div class="form-group">
                                <label for="password-input">Kodeord (Påkrævet)</label>
                                <input type="password" class="form-control" name="password-input" id="password-input" placeholder="Kodeord" required="required" value="1234">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Luk</button>
                            <button type="submit" id="submit-login" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#!">Footer content here</a>
        </nav>

    </body>
</html>
<script src="libs/jquery/jquery-3.3.1.min.js"></script>
<script src="libs/popper/popper.min.js"></script>
<script src="libs/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
<script src="js/helper.js"></script>