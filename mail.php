<?php
// Safer mail handler: validation, header-injection protection, JSON response
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Configuration
$admin_email  = "khanoorr3@gmail.com"; // destination for form submissions
$project_name = "Portfolio Website Lead";
$form_subject = "New Contact Form Submission";

// Helper: safe header encoding for UTF-8
function adopt($text) {
    return '=?UTF-8?B?'.base64_encode($text).'?=';
}

// Prevent header injection
function is_header_injection($str) {
    return preg_match("/[\r\n]/", $str);
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Basic required fields (adjust as needed)
$required = ['name', 'email', 'message'];

$data = [];
foreach ($_POST as $k => $v) {
    // normalize keys and trim values
    $key = trim($k);
    $value = is_array($v) ? $v : trim($v);
    if ($value === '' || $value === null) continue;
    $data[$key] = $value;
}

// Check required
foreach ($required as $r) {
    if (empty($data[$r])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => "Missing required field: $r"]);
        exit;
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL) || is_header_injection($data['email'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit;
}

// Build HTML table message
$c = true;
$rows = '';
foreach ($data as $key => $value) {
    $safeKey = htmlspecialchars($key, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeVal = htmlspecialchars(is_array($value) ? implode(', ', $value) : $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $rowStyle = ($c = !$c) ? '' : ' style="background-color:#f8f8f8;"';
    $rows .= "<tr{$rowStyle}><td style='padding:10px;border:#e9e9e9 1px solid;'><b>{$safeKey}</b></td><td style='padding:10px;border:#e9e9e9 1px solid;'>{$safeVal}</td></tr>";
}

$message = "<table style='width:100%;border-collapse:collapse;'>" . $rows . "</table>";

// Prepare headers
$fromAddress = 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: ' . adopt($project_name) . " <{$fromAddress}>";
$headers[] = 'Reply-To: ' . $data['email'];

$headerStr = implode("\r\n", $headers);

// Send mail
$sent = mail($admin_email, adopt($form_subject), $message, $headerStr);

if ($sent) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
}

?>
