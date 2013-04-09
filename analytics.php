<!DOCTYPE html>
<html>
<head>
	<title>WYPZZ Insurance Verification System</title>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/start/jquery-ui.css" rel="stylesheet" />
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css" rel="stylesheet" />
    
	<script type="text/javascript" src="js/lib/d3.v3.min.js"></script>

	<script type="text/javascript" src="js/view/visualizations.js"></script>

	<link type="text/css" href="css/main.css" media="all" rel="stylesheet" />
    
	<link type="text/css" href="css/visualizations.css" media="all" rel="stylesheet" />
    
	<script type="text/javascript">
		$(document).ready(function(){
			// This gets called when the app is ready.
			console.log("ready");
			$( "#tabs" ).tabs();
			
		});
		
	</script>
</head>
<body>

	<div id="navbar" class="">
        <div align="center" class="welcome-div" >Welcome Dr. Zhou!</div>
        <div class="menubar" align="right">
            <div class="menu-button menu-deco"><a href="index.php" class="menu-link">Home</a></div>
            <div class="menu-button fade">Trends</div>
            <div class="menu-button menu-deco" onClick="alert('Account management and design is not within the scope of this project, therefore this feature has been disabled.');">Account</div>
        </div>
	</div>
    
	<div id="tabs">
         <ul>
            <li><a href="#visual-1">Claim History</a></li>
            <li><a href="#visual-2">Top Charts</a></li>    
            <li><a href="#visual-3">People List </a></li>
        </ul>
        <div id="visual-1">
        ac
        </div>    
        <div id="visual-2"></div>
        <div id="visual-3"></div>
	</div>

</body>
</html>