<?php declare(strict_types=1);

namespace PUBLIC_HTML\PHP;

require_once "../../autoloader.php";

\Autoloader::register();

ini_set( 'session.cookie_httponly', 1 );


session_start();

$endpoint = (isset($_GET['ep'])) ? $_GET['ep'] : NULL;

if($endpoint === NULL) {
    header("location: /");
}




$token = (isset($_SESSION['api_token'])) ? $_SESSION['api_token'] : NULL;





var_dump($_POST);







