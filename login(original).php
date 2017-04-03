
<?php

header('Location: https://opal.ils.unc.edu/~luthfi/Landing_Page/'); //will redirect the PHP to another page ! 
$servername = "classroom.cs.unc.edu";
$username = "junf";
$password = "!pjf4869aptx15";
$dbname = "junfdb";





// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// sql to create table
$sql = "CREATE TABLE IF NOT EXISTS User (
id INT(6) AUTO_INCREMENT PRIMARY KEY, 
email varchar(255) NOT NULL
)";


//if (mysqli_query($conn, $sql)) {
//    echo "Table User created successfully";
//} else {
 //   echo "Error creating table: " . mysqli_error($conn);
//}


//insert 
if (isset($_POST)) {
$email = $_POST['email'];
} 


$insert = "INSERT INTO User (email)
VALUES ('$email')";


//$test = "INSERT INTO User (email, password)
//VALUES ('junf@unc.edu', 'test123')"; 



if(mysqli_query($conn, $insert)){
	"you have succesful inserted";
}else{
	echo"failed";
}

//$conn ->query("INSERT INTO User (email, password)
//VALUES ($email, $pass)");


mysqli_close($conn);
?>


