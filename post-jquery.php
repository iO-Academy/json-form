<?php

if (!empty($_POST)) {
	$arr = [
	    'success' => true,
	    'message' => 'data recieved',
	    'data' => $_POST
	];
	echo json_encode($arr);
} else {
	echo 'No POST data found';
}
