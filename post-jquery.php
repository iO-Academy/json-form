<?php

if (validateData($_POST)) {
    $arr = [
        'success' => true,
        'message' => 'Valid data received. Exercise complete. Maybe try the stretch fields now.'
    ];

    if (validateStretch($_POST)) {
        $arr = [
            'success' => true,
            'message' => 'Valid data received. Exercise complete. Stretch goals complete, great work!'
        ];
    }
} else {
    $arr = [
        'success' => false,
        'message' => 'Invalid data. Try again.'
    ];
}

echo json_encode($arr);

function validateData(array $data) {
    return (
        !empty($data) &&
        isset($data['name']) &&
        isset($data['petName']) &&
        isset($data['favColour']) &&
        isset($data['favCar']) &&
        isset($data['marketing']) &&
        isset($data['email']) &&
        isset($data['goldeneye'])
    );
}

function validateStretch(array $data) {
    return (
        isset($data['age']) &&
        is_bool($data['age']) &&
        isset($data['marioKart']) &&
        is_bool($data['marioKart']) &&
        isset($data['receiveEmails']) &&
        is_bool($data['receiveEmails'])
    );
}
