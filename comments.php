<div style="position: absolute; top: 50px; left: 50px;">
    <?php
    include('comments.php');
    ?>
</div>
<?php
if(isset($_POST['submit'])){
    $to = "star881216@gmail.com"; //tu dirección de correo electrónico
    $subject = "Nuevo comentario en tu sitio web";
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: $from";
    $body = "Nombre: $name\n\nEmail: $from\n\nComentario:\n$message";
    
    if(mail($to, $subject, $body, $headers)){
        echo "<div style='background-color: #007bff; border-radius: 10px; padding: 10px; color: #fff; text-align: center;'>Tu comentario ha sido enviado con éxito.</div>";
    } else{
        echo "<div style='background-color: #dc3545; border-radius: 10px; padding: 10px; color: #fff; text-align: center;'>Ha ocurrido un error al enviar tu comentario. Por favor, inténtalo de nuevo más tarde.</div>";
    }
}
?>