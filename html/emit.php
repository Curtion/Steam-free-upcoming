<?php
header('Content-Type: application/json');

function sc_send($text, $url, $description, $key) {
    $desp = $url.'
    '.$description;
    $postdata = http_build_query(array('text' => $text, 'desp' => $desp));
    $opts = array('http' =>
        array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata));

    $context = stream_context_create($opts);
    return $result = file_get_contents('https://sctapi.ftqq.com/'.$key.'.send', false, $context);

}

$key = "jnB6UteEE%kSLetB";

$p_key = $_GET['key'];

if ($key === $p_key) {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $title = $data->title;
    $description = $data->description;
    $url = $data->url;
    $sendkeys = file_get_contents("sendkey.txt");
    $sendkeysArr = explode(PHP_EOL, $sendkeys);
    foreach ($sendkeysArr as $key => $value) {
        if(!empty($value)) {
            sc_send($title, $url, $description, $value);
        }
    }
} else {
    $data = ['msg' => '权限不足'];
    echo json_encode($data);
}

?>