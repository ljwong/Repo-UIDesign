<!DOCTYPE html>
<html>
<head>
	<title>WYPZZ Insurance Verification System</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
    <!--
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/start/jquery-ui.css" rel="stylesheet" />-->
<link type="text/css" href="css/jquery-ui-1.8.24.custom.css" rel="stylesheet" />
<!--
<link type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css" rel="stylesheet" />
    -->
	<script type="text/javascript" src="js/lib/d3.v3.min.js"></script>

	<script type="text/javascript" src="js/view/chat.js"></script>
	<script type="text/javascript" src="js/view/details-history.js"></script>
	<script type="text/javascript" src="js/view/search.js"></script>
	<script type="text/javascript" src="js/view/visualizations.js"></script>

	<link type="text/css" href="css/main.css" media="all" rel="stylesheet" />
    
	<link type="text/css" href="css/chat.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/details-history.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/details-treatment.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/search.css" media="all" rel="stylesheet" />
	<link type="text/css" href="css/visualizations.css" media="all" rel="stylesheet" />

    
	<script type="text/javascript">
		var g_patient_info = new Array();
        var g_treatment_info = new Array();
		var g_autocomplete_names = new Array();
		var g_autocomplete_treatment = new Array();
		var g_treatmentSearch = "";
   		var Details = new Details();
		 
		$(document).ready(function(){
			// This gets called when the app is ready.
      //$("#searchtabs").tabs();
      $.getJSON('data/treatment_info.json', function(data){
              
              $.each(data, function(key, val) {
                g_treatment_info[val['id']] = val;
				g_autocomplete_treatment.push(val['treatment']);
              });
			$("#treatment").autocomplete({source: g_autocomplete_treatment});
      }); 

      $.getJSON('data/patient_info.json', function(data){
              g_patient_info = data;
			  for (x in g_patient_info)
			  {
				 g_autocomplete_names.push( g_patient_info[x]['name'] ); 
			  }
			  $("#generalname").autocomplete({source: g_autocomplete_names});
			  Details.init();
			  
      });
      	$("#generaldob").datepicker({     
			 	maxDate: new Date(),
				minDate: "-130y",
				defaultDate: "-30y",
				changeMonth: true,
      			changeYear: true});
		
		$("button").addClass("ui-corner-all");
		
    	
			
		});
	</script>
</head>
<body>

	<div id="navbar" class="">
    	<div style="position:absolute; top: 5px; left: 5px;"><img src="img/logo.png" width="32px" height="32px"; /> <div style="position:absolute; top:5px; left:40px; width: 300px;"><span >EZ Insurance Verification System</span></div></div>
        <div align="center" class="welcome-div" >Welcome, Dr. Zhou!</div>
        <div class="menubar" align="right">
            <div class="menu-button fade">Home</div>
            <div class="menu-button menu-deco"><a href="analytics.php" class="menu-link" target="_blank">Trends</a></div>
            <div class="menu-button menu-deco" onClick="alert('Account management and design is not within the scope of this project, therefore this feature has been disabled.');">Account</div>
             <div class="menu-button menu-deco" onClick="alert('Account management and design is not within the scope of this project, therefore this feature has been disabled.');">Log Out</div>
       </div>
	</div>
	
    <!-- Search box HTML code comes here.-->
    <div id="searchbox">
    	<div align="center"><h3>Search For Patient</h3></div>

    	<!-- Two search tabs -->
        <div id="searchtabs">
        <!--
        <ul >
    		<li class="">
    			<a href="#existtab" class="searchtab"> Search Existing Patient </a>
    		</li>
    		<li><a href="#generaltab" class="searchtab"> Quick Insurance Search </a></li>
    	</ul>
        -->
        <!-- content of each tab -->
        <!--
    		<div id="existtab" class="search-tab-content">
        		
        			NAME : <input type="text" id="existname"><br>
        			DOB (mm/dd/yyyy) : <input type="text" id="existdob" size=11><br><br><br>
        			<button onclick="SearchForExistingPatient();"> Search Existing Patient </button>
        		
        	</div>-->
            
        	<div id="generaltab" class="search-tab-content">
        			Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="generalname"><br>
        			Date of Birth : <input type="text" id="generaldob" > <br><br><br>
        			SSN : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="ssnum"><br>
        			Insurance Agent : &nbsp;&nbsp; <input type="text" id="insurance"><br>
        			Insurance Number : <input type="text" id="insurancenum"><br>
        			Treatment : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" id="treatment"><br><br>
        			<button onclick="GeneralSearch()" style="font-size:24px"> Search Insurance </button>
        			<div><span class="ui-state-error-text" id="search_error" style="font-size:24px"></span></div>
        	</div>
        </div>
    	
    	<!--<div class="clear"></div>-->

    	
	</div>
	<div style="min-width: 10px; display:inline-block;"></div>
	<div id="chatbox">
        <!-- Chat box HTML code comes here.-->
        <div align="center"><h3 id="chat-header">Live Chat</h3></div>
        <div style="height:350px;"><iframe style='overflow:hidden;width:100%;height:100%;' frameborder='0' border='0' src="http://chat.zoho.com/mychat.sas?u=dd3fb2b74247badc5547739b0c0e4f1d&chaturl=Chat&V=000000-f7a6ea-eff4f9-f7a6ea-Customer%20Service"></iframe></div>
        
        <!--<div style="height:350px;">
		<iframe style='overflow:hidden;width:100%;height:100%;' frameborder='0' border='0' src="http://chat.zoho.com/mychat.sas?u=0cb901437ee184535547739b0c0e4f1d&chaturl=David%20Zhao&V=000000-70a9e1-eff4f9-70a9e1-Speak%20to%20a%20Representative"></iframe>
		</div>-->
        <div align="center"><h5>Unsure about a treatment coverage? Ask someone now.</h5></div>
	</div>
	
	<!-- Details box HTML code comes here.-->
    <!--
	<div id="detailsbox">
        <p id="searchresults" class="printsearchresult"></p><br>
        <p id="searchstatus" class="printmulmatches"></p>

        <table id="searchresulttable" border="1"></table> 
	</div>-->
    <div id="detailsbox">
		<div id="tabs">
  	<ul id="list-of-patients">
    		<!-- Patients tabs will be populated here-->
 		</ul>
  	

	</div><!--end of tabs-->
	</div>

</body>
</html>