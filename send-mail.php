<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

$firstName = trim($_POST["first_name"] ?? "");
$lastName  = trim($_POST["last_name"] ?? "");
$email     = trim($_POST["email"] ?? "");
$phone     = trim($_POST["phone"] ?? "");
$subject   = trim($_POST["subject"] ?? "");
$message   = trim($_POST["message"] ?? "");

if (!$firstName || !$lastName || !$email || !$message) {
    echo json_encode(["success" => false, "message" => "Please fill all required fields."]);
    exit;
}

/* COMPANY EMAIL DETAILS */
$to = "info@blessedlolizeinvestment.com"; // company inbox
$fromEmail = "info@blessedlolizeinvestment.com";
$fromName = "Blessed Lolize Investment";

/* EMAIL CONTENT */
$emailSubject = "Website Contact Form: $subject";

$emailBody = "
New message from website contact form:

First Name: $firstName
Last Name: $lastName
Email: $email
Phone: $phone
Inquiry Type: $subject

Message:
$message
";

/* HEADERS */
$headers = "From: $fromName <$fromEmail>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

/* SEND MAIL */
if (mail($to, $emailSubject, $emailBody, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Mail could not be sent."]);
}
