<?php
try {
    if ($_POST['pwd'] === '123456') {
        if (file_put_contents("sendkey.txt", $_POST['sendkey'].PHP_EOL, FILE_APPEND)) {
            echo "新建成功";
        }
    } else {
        echo "密钥错误";
    }
} catch (Exception $e) {
    echo $e;
}

?>