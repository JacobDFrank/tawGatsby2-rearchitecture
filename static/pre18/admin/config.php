<?php

$debug = FALSE;
error_reporting(E_ALL);
ini_set('display_errors', 1);
$db_host = 'cias.rit.edu';
$db_user = 'thoughtatwork';
$db_password = 'ergoC00L4ity';
$db_name = 'thoughtatwork';

if($debug){

	$formAction = 'https://eservicestest.rit.edu/infinetProcessor/passthroughRedirect.process';

}else{ $formAction = 'https://eservices.rit.edu/infinetProcessor/passthroughRedirect.process'; }

$db_table = 'registrations';
$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);

if(mysqli_connect_errno()) echo "There was an error connecting to the database";


# Configuration variables
$paymentType = 'ThoughtAtWork';
$customerId = 'beansoup';
$hashCode = 'NTvavFe60cIKgb75';
$redirectURL = "https://thoughtatwork.cias.rit.edu/success.php";

?>
