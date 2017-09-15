<?php
$host ='127.0.0.1';
$dbuser = 'root';
$dbpwd = 'root';
$db ='nhdz';
$conn = new mysqli($host,$dbuser,$dbpwd,$db);
if ($conn->connect_error) {
	die('连接失败': .$conn->connect_error);
}	
$telp =$_REQUEST['telp'];
$pwd =$_REQUEST['pwd'];
$sql = "select * from user where telp = '".$telp."' and pwd = '".$pwd."'";

if($result = $conn->query($sql)){
	// num_rows 代表查询到几条数据
	if($result->num_rows){
		echo '成功';
	}else {
		echo '用户或密码错误';
	}
}else {
	echo '查询语句错误' .$conn->error;
}
$conn->close();

?>
