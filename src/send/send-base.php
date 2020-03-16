<?php

$usertel = $_POST['tel'];
$username = $_POST['name'];
$userdate = date('Y-m-d H:i:s');
echo 'usertel ' . $usertel;
echo ' username ' .  $username;
echo ' userdate ' .  $userdate;

//для почты
$sendto = 's.pashkevich@webcat.by';

// Формирование заголовка письма
$subject = "new webcat site";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
$headers .= "From: <new-webcat@webcat.by>\r\n"; // от кого письмо

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>" . $subject . "</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> " . $username . "</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> " . $usertel . "</p>\r\n";
$msg .= "<p><strong>Дата заполнения:</strong> " . $userdate . "</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
require_once __DIR__ . "/SendMailSmtpClass.php";
$mailSMTP = new SendMailSmtpClass(); // создаем экземпляр класса
$result = $mailSMTP->send($sendto, $subject, $msg, $headers); // отправляем письмо
