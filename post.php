<?php

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);
$_POST = $obj;

if (!empty($_POST)) {
	var_dump($_POST);
} else {
	echo 'No POST data found';
}
