<!DOCTYPE html>
<html>
<head>
	<title>WYPZZ Insurance Verification System | Trends</title>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
    <!--
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/start/jquery-ui.css" rel="stylesheet" />
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css" rel="stylesheet" />
    -->
    <link type="text/css" href="css/jquery-ui-1.8.24.custom.css" rel="stylesheet" />

	<script type="text/javascript" src="js/lib/d3.v3.min.js"></script>

	<script type="text/javascript" src="js/app/visuals-claims.js"></script>
	<script type="text/javascript" src="js/app/visuals-patients.js"></script>
	<script type="text/javascript" src="js/app/visuals-treatments.js"></script>


	<link type="text/css" href="css/main.css" media="all" rel="stylesheet" />
    
	<link type="text/css" href="css/visualizations.css" media="all" rel="stylesheet" />
    
	<script type="text/javascript">
		$(document).ready(function(){
			// This gets called when the app is ready.
			$( "#tabs" ).tabs();
			startClaimsVisual("claims-visual");
			startTreatmentsVisual("treatments-visual");
			startPatientsVisual("patients-visual");
		});
		
	</script>
</head>
<body>

	<div id="navbar" class="">
    	<div style="position:absolute; top: 5px; left: 5px;"><img src="img/logo.png" width="32px" height="32px"; /> <div style="position:absolute; top:5px; left:40px; width: 300px;"><span >EZ Insurance Verification System</span></div></div>
        <div align="center" class="welcome-div" >Welcome Dr. Zhou!</div>
        <div class="menubar" align="right">
            <div class="menu-button menu-deco"><a href="index.php" class="menu-link">Home</a></div>
            <div class="menu-button fade">Trends</div>
            <div class="menu-button menu-deco" onClick="alert('Account management and design is not within the scope of this project, therefore this feature has been disabled.');">Account</div>
            <div class="menu-button menu-deco" onClick="alert('Account management and design is not within the scope of this project, therefore this feature has been disabled.');">Log Out</div>

        </div>
	</div>
    <!--<div align="center"><h1>Trends at Zhou's Medical Clinic</h1></div> -->
	<div id="tabs">
         <ul>
            <li><a href="#patient-trend">Patients</a></li>
            <li><a href="#claims-trend">Claims</a></li>
            <li><a href="#treatments-trend">Treatments</a></li>    
        </ul>
        <div id="patient-trend">
    		<div align="center"><h3>Patients in the past 12 months</h3></div>
            <div id="patients-visual"></div>
            <br />
        </div>    
        <div id="claims-trend">
    		<div align="center"><h3>Claims in the past 12 months</h3></div>
            <div id="claims-visual"></div>
        	
        </div>
        <div id="treatments-trend">
    		<div align="center"><h3>Treatments in the past 12 months</h3></div>
            <div id="treatments-visual"></div>
        
        </div>
	</div>

</body>
</html>