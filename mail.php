<?php
// Turn on error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Set your fixed admin email
$admin_email  = "sameerzawed@gmail.com";
$project_name = "Portfolio Website Lead";
$form_subject = "New Contact Form Submission";

// Build the HTML message
$c = true;
$message = '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    foreach ($_POST as $key => $value) {
        if ($value != "") {
            $message .= "
            " . (($c = !$c) ? '<tr>' : '<tr style=\"background-color: #f8f8f8;\">') . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>" . htmlspecialchars($key) . "</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>" . htmlspecialchars($value) . "</td>
            </tr>
            ";
        }
    }

    $message = "<table style='width: 100%;'>$message</table>";

    function adopt($text) {
        return '=?UTF-8?B?' . base64_encode($text) . '?=';
    }

    $headers = "MIME-Version: 1.0" . PHP_EOL .
               "Content-Type: text/html; charset=utf-8" . PHP_EOL .
               "From: " . adopt($project_name) . " <no-reply@yourdomain.com>" . PHP_EOL .
               "Reply-To: no-reply@yourdomain.com" . PHP_EOL;

    $success = mail($admin_email, adopt($form_subject), $message, $headers);

    if ($success) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
