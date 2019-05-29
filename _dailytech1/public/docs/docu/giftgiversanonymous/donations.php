<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Gift Givers Anonymous</title>
<style type="text/css">
<!--
body {
	font: 100%/1.4 Verdana, Arial, Helvetica, sans-serif;
	background-color: #42413C;
	margin: 0;
	padding: 0;
	color: #000;
}

/* ~~ Element/tag selectors ~~ */
ul, ol, dl { /* Due to variations between browsers, it's best practices to zero padding and margin on lists. For consistency, you can either specify the amounts you want here, or on the list items (LI, DT, DD) they contain. Remember that what you do here will cascade to the .nav list unless you write a more specific selector. */
	padding: 0;
	margin: 0;
}
h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;	 /* removing the top margin gets around an issue where margins can escape from their containing div. The remaining bottom margin will hold it away from any elements that follow. */
	padding-right: 15px;
	padding-left: 15px; /* adding the padding to the sides of the elements within the divs, instead of the divs themselves, gets rid of any box model math. A nested div with side padding can also be used as an alternate method. */
}
a img { /* this selector removes the default blue border displayed in some browsers around an image when it is surrounded by a link */
	border: none;
}
/* ~~ Styling for your site's links must remain in this order - including the group of selectors that create the hover effect. ~~ */
a:link {
	color: #42413C;
	text-decoration: underline; /* unless you style your links to look extremely unique, it's best to provide underlines for quick visual identification */
}
a:visited {
	color: #6E6C64;
	text-decoration: underline;
}
a:hover, a:active, a:focus { /* this group of selectors will give a keyboard navigator the same hover experience as the person using a mouse. */
	text-decoration: none;
}

/* ~~ this fixed width container surrounds the other divs ~~ */
.container {
	width: 960px;
	background-color: #FFF;
	margin: 0 auto; /* the auto value on the sides, coupled with the width, centers the layout */
}

/* ~~ the header is not given a width. It will extend the full width of your layout. It contains an image placeholder that should be replaced with your own linked logo ~~ */
.header {
	background-color: #ADB96E;
}

/* ~~ This is the layout information. ~~ 

1) Padding is only placed on the top and/or bottom of the div. The elements within this div have padding on their sides. This saves you from any "box model math". Keep in mind, if you add any side padding or border to the div itself, it will be added to the width you define to create the *total* width. You may also choose to remove the padding on the element in the div and place a second div within it with no width and the padding necessary for your design.

*/

.content {
	height: 600px;
	padding-top: 10px;
	padding-right: 0;
	padding-bottom: 10px;
	padding-left: 0;
}

/* ~~ The footer ~~ */
.footer {
	padding: 10px 0;
	background-color: #CCC49F;
}

/* ~~ miscellaneous float/clear classes ~~ */
.fltrt {  /* this class can be used to float an element right in your page. The floated element must precede the element it should be next to on the page. */
	float: right;
	margin-left: 8px;
}
.fltlft { /* this class can be used to float an element left in your page. The floated element must precede the element it should be next to on the page. */
	float: left;
	margin-right: 8px;
}
.clearfloat { /* this class can be placed on a <br /> or empty div as the final element following the last floated div (within the #container) if the #footer is removed or taken out of the #container */
	clear:both;
	height:0;
	font-size: 1px;
	line-height: 0px;
}
#apDiv3 {
	padding: 10px;
}
#apDiv3 {
	padding: 10px;
}
.container div1 {
	height: 250px;
}
.container .intropage {
	height: 100px;
	width: 80%;
	margin-right: auto;
	margin-left: auto;
}
-->
</style>
<link href="plaza_style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
#apDiv1 {
	position: absolute;
	left: 395px;
	top: 441px;
	width: 270px;
	height: 419px;
	z-index: 1;
}
#apDiv2 {
	position: absolute;
	left: 648px;
	top: 454px;
	width: 300px;
	height: 413px;
	z-index: 2;
}
#apDiv3 {
	position: absolute;
	left: 51px;
	top: 430px;
	width: 326px;
	height: 632px;
	z-index: 3;
	padding: 2px;
}
#estate {
	height: 175px;
	width: 100%;
	padding-top: 15px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
}
#estate2 {
	height: 650px;
}
#apDiv4 {
	position: absolute;
	left: 178px;
	top: 260px;
	width: 724px;
	height: 120px;
	z-index: 1;
	background-color: #C8E8F2;
	border: medium outset #AEDDEC;
}
#apDiv5 {
	position: absolute;
	left: 652px;
	top: 392px;
	width: 250px;
	height: 35px;
	z-index: 2;
	background-color: #C8E8F2;
	border: medium outset #B7E0EE;
	text-align: center;
	font-family: "Palatino Linotype";
	color: #6E2020;
}
</style>
</head>

<body>

<div class="container">
  <div class="header"><a href="#"><img src="assets/GiftBanner.jpg" alt="banner" width="960" height="197" usemap="#Map" border="0" />
      <map name="Map" id="Map">
        <area shape="rect" coords="8,11,952,187" href="index2.html" target="_self" alt="home" />
      </map>
  </a> 
  <!-- end .header --></div>
  <p><br />
<div class="bluediv">
  <p class="new_blue">
  <?php # handle_form.php

// Validate the first name and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['first_name'])) {
   $firstname = stripslashes($_REQUEST['first_name']);
} else {
   $firstname = NULL;
echo '<p><font color="red">You forgot to enter your first name.</font></p>';
}

// Validate the last name and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['last_name'])) {
   $lastname = stripslashes($_REQUEST['last_name']);
} else {
   $lastname = NULL;
echo '<p><font color="red">You forgot to enter your last name.</font></p>';
}


// Validate the email and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['e_mail'])) {
   $email = $_REQUEST['e_mail'];
} else {
   $email = NULL;
echo '<p><font color="red">You forgot to enter your email address.</font></p>';
}


// Validate the comments and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['comment'])) {
   $comment = stripslashes($_REQUEST['comment']);
} else {
   $comment = NULL;
echo '<p><font color="red">You forgot to enter your comments.</font></p>';
}

// If everything is okay, print the message.
if ($firstname && $lastname && $email && $comment) {

      echo "<p>Thank you, <b>$firstname</b>, for the following comments:<br/><br/>
      <tt>$comment</tt></p>   
      <p>Your message has been sent and we will promptly reply to you at <i>$email</i>.</p>\n";
      

} else { // One form element was not filled out properly.
      echo '<p><font color="red">Please <a href="donations.html" target="_self"><b>return to form</b></a>&nbsp; to complete your information.</font></p>';
	  
}

$to = "kalei@giftgiversanonymous.org";
$subject = "GGA ContactUs Comment";
$message = "$firstname $lastname at this email: $email sent this comment: $comment";
$headers = "From: webmail@giftgiversanonymous.org" . "\r\n" .
"CC: thomas76milton@gmail.com";

// If everything is okay, mail the message.
if ($firstname && $lastname && $email && $comment) {
mail($to,$subject,$message,$headers);
}
else { // One form element was not filled out properly.
      echo '<p><font color="red">Message has not been sent.</font></p>';
	  
}
?>
  </div>
  
  
</p><br /><br />
<br />
<br />
<br />
<br />

<br />

 <div class="intropage">
   
     <a href="index2.html" target="_self" class="intropage">Back to Gift Givers Anonymous Site</a>
   <br />
 </div>
</div>
  <p class="new_blue"></p>

 
<!-- end .container --></div>
</body>
</html>