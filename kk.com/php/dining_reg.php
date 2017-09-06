<?php

	$cn = mysqli_connect('localhost','root','','wt_project');

	if(isset($_POST['lock'])){
		$name = $_POST['owner_name'];
		$addr = $_POST['addr'];
		$hall_name = $_POST['dining_hall_name'];
		$category= $_POST['category'];
		$rate = $_POST['rate'];
		$city = $_POST['city'];
		$food_id_no = $_POST['license_no'];

		$query = "INSERT INTO `dininghall_gen_info`(`Name`, `Address`, `City`,`Category`, `Rate`, `Owner_Name`, `Fd_ID`) VALUES ('".$hall_name."','".$addr."','".$city."','".$category."','".$rate."','".$name."','".$food_id_no."')";

		$run = mysqli_query($cn,$query);
	}
?>
