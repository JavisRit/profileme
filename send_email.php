<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to_email = "rittiporn.phu@spumail.net";

    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";


    if (mail($to_email, $subject, $body, $headers)) {
        echo "Message sent successfully";
    } else {
        echo "Failed to send message. Please try again later";
    }
}
?>