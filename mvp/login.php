<!-- this it php for MVP subscribe -->
<?php

header('Location: http://www.communicon.co/mvp');
//$url = 'http://opal.ils.unc.edu/~luthfi/Landing_Page/login.php';
//$myvars = 'email='.$_POST['email'];


//extract data from the post
//set POST variables
//$url = 'http://prestonrobinson.xyz/p.php';
$url = 'https://opal.ils.unc.edu/~luthfi/Landing_Page/login.php';
$fields = array(
//'lname' => urlencode($_POST['last_name']),
//'fname' => urlencode($_POST['first_name']),
//'title' => urlencode($_POST['title']),
//'company' => urlencode($_POST['institution']),
//'age' => urlencode($_POST['age']),
'email' => urlencode($_POST['email']),
//'phone' => urlencode($_POST['phone'])
//'email' => urlencode('prestonmr@gmail.com')
);

//url-ify the data for the POST
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

//execute post
$result = curl_exec($ch);
echo($result);

//close connection
curl_close($ch);

?>


