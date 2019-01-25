<?php
if (isset($_POST["register"])) {
    $name = $_POST["first_name"];
    echo "Welcome ".$name;
}
?>