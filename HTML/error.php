<?php
// Habilitar la visualización de errores para depuración
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

// Inicializar las variables
$error = "";
$successMessage = "";

require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar campos del formulario
    if (!$_POST["email"]) {
        $error .= "An email address is required.<br>";
    }
    if (!$_POST["subject"]) {
        $error .= "A subject for the message is required.<br>";
    }
    if (!$_POST["message"]) {
        $error .= "A message is required.<br>";
    }

    // Validar formato de email
    if ($_POST["email"] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
        $error .= "The email address is invalid.<br>";
    }

    if ($error != "") {
        // Mostrar errores en la misma página
        $error = '<div class="alert alert-danger" role="alert">' . $error . '</div>';
    } else {
        try {
            // Configuración del servidor SMTP
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'borjagr22@gmail.com';
            $mail->Password   = 'cxsg ukab rnsn pmka';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            // Configuración del email
            $mail->setFrom($_POST["email"], $_POST["sender"]);
            $mail->addAddress('borjagr22@gmail.com');
            $mail->addReplyTo($_POST["email"], $_POST["sender"]);
            $mail->Subject = $_POST["subject"];
            $mail->Body    = $_POST["message"];

            // Intentar enviar el email
            if ($mail->send()) {
                $_SESSION['successMessage'] = '<div class="alert alert-success custom-success" role="alert">Your message was sent, I´ll get back to you ASAP!</div>';
            } else {
                $_SESSION['errorMessage'] = '<div class="alert alert-danger custom-danger" role="alert">Your message couldn’t be sent. Try again later.</div>';
                
            }

            header("Location: " . $_SERVER['PHP_SELF']);
            exit();
        } 
        catch (Exception $e) 
        {
            $error = '<div class="alert alert-danger" role="alert">Message could not be sent. Mailer Error: ' . $mail->ErrorInfo . '</div>';
        }
    }
}

if (isset($_SESSION['successMessage'])) {
    echo $_SESSION['successMessage'];
    unset($_SESSION['successMessage']);
}

if ($error != '') {
    echo $error;
}
?>



