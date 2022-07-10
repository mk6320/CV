<?php

$name = $_POST['name']
$email = $_POST['email']
$msg = $_POST['msg']

$mailheader = 'From:'.$name.'<'.$email.">\r\n";

$recipient = "mohamd.xalil@gmail.com";

mail($recipient, $msg, $mailheader)
or die("Error!")

echo'message send'; 


?> 