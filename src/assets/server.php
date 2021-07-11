<?php
echo var_dump($_POST);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);

if(isset($_POST) && !empty($_POST)){
	$fio = (isset($_POST['name']))?$_POST['name']:'';
	$way = (isset($_POST['phone']))?$_POST['phone']:'';
  $text = (isset($_POST['text']))?$_POST['text']:'';
    
  $sendMessage = "<p>Новое письмо контактной формы:</p><p><b>Имя:</b> ".$fio."</p><p><b>Телефон:</b> ".$way."</p><p><b>Сообщение:</b></p><p>".$text."</p>";

  $mail->CharSet = 'utf-8';
  $mail->SMTPDebug = 0;                                 // Enable verbose debug output
  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'broobrootoys@mail.ru';                 // SMTP username
  $mail->Password = 'WoodenToys';                           // SMTP password
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                                    // TCP port to connect to
  $mail->setFrom('broobrootoys@mail.ru', 'BrooBrooToys');
  $mail->addAddress('dd.kosilova@mail.ru');               // Name is optional

  //Content
  $mail->isHTML(true);                                  // Set email format to HTML
  $mail->Subject = 'Форма обратной связи';
  $mail->Body    = $sendMessage;
  $mail->AltBody = $sendMessage;

  if($mail->send()) {
    echo "Данные отправлены.";
  }else {
    echo "Ошибка! Данные не отправлены.";
  }
} else {
  "Ошибка!";
}

?>