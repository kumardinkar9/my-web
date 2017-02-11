<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = 'From: '.$name.' <'.$email.'>';
    //send email
	$success = mail("kumardinkar9@gmail.com", "Dinkar Contact Form - " .$email, $message, $headers);
	if ($success) {
		echo "Success";
	} else {
		echo "Failure";
	}

}