<!DOCTYPE html>
<html>
<head>
	<title>WYPZZ Insurance Verification System</title>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/start/jquery-ui.css" rel="stylesheet" />
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css" rel="stylesheet" />
    
	<script type="text/javascript" src="js/lib/d3.v3.min.js"></script>

	<script type="text/javascript" src="js/view/chat.js"></script>
	<script type="text/javascript" src="js/view/details-history.js"></script>
	<script type="text/javascript" src="js/view/details-treatment.js"></script>
	<script type="text/javascript" src="js/view/search.js"></script>
	<script type="text/javascript" src="js/view/visualizations.js"></script>

	<link type="text/css" href="css/main.css" media="all" rel="stylesheet" />
    
	<link type="text/css" href="css/chat.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/details-history.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/details-treatment.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/search.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/visualizations.css" media="all" rel="stylesheet" />
    
	<script type="text/javascript">
		$(document).ready(function(){
			// This gets called when the app is ready.
			
			
		});
		
	</script>
</head>
<body>

	<div id="navbar" class="">
    	<div style="position:absolute; top: 5px; left: 5px;"><img src="img/logo.png" width="32px" height="32px"; /></div>
        <div align="center" class="welcome-div" >Welcome, Dr. Zhou!</div>
        <div class="menubar" align="right">
            <div class="menu-button fade">Home</div>
            <div class="menu-button menu-deco"><a href="analytics.php" class="menu-link" target="_blank">Trends</a></div>
            <div class="menu-button menu-deco" onClick="alert('Account management and design is not within the scope of this project, therefore this feature has been disabled.');">Account</div>
        </div>
	</div>
	
    <div id="searchbox">
        <!-- Search box HTML code comes here.-->
		
	</div>

	<div id="chatbox">
        <!-- Chat box HTML code comes here.-->
        <div style="height:300px;">
		<iframe style='overflow:hidden;width:100%;height:100%;' frameborder='0' border='0' src="http://chat.zoho.com/mychat.sas?u=0cb901437ee184535547739b0c0e4f1d&chaturl=David%20Zhao&V=000000-70a9e1-eff4f9-70a9e1-Speak%20to%20a%20Representative"></iframe>
		</div>
	</div>
	<div id="detailsbox">
        <!-- Details box HTML code comes here.-->
	</div>
	

</body>
</html>