<?php
$socket = fsockopen("pool.ntp.org", 123, $err_no, $err_str, 1);
    if (!$socket) {
        die("Failed to connect to NTP server: ($err_no) $err_str");
    }

    fwrite($socket, chr(bindec('00'.sprintf('%03d', decbin(3)).'011')));
    $data = fread($socket, 48);
    fclose($socket);

    $data = bin2hex($data);
    $data = pack("H*", $data);
    $data = unpack("N12", $data);
    $timestamp = sprintf('%u', $data[9]);

    $time = date("H:i:s", $timestamp - 2208988800);

    echo $time;
?>