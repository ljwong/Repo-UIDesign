	// Function that grabs search values from user and searches for an
	// existing patient
	function SearchForExistingPatient () {
		// grab all search fields for existing patient
		existname 	 = $("#existname").val();
		existdob 	 = $("#existdob").val();
			
		// clear all fields after button press
		$("#existname").val("");
		$("#existdob").val("");
		data = g_patient_info;
		var patientlist = new Array();
		var j = 0;

		for (var i in data) {
			if(data[i]['name'].toLowerCase() == existname.toLowerCase() || data[i]['DOB'] == existdob) {
				patientlist[j] = new Object();
				patientlist[j].id = i;
				patientlist[j].fullname = data[i].name;
				patientlist[j].dob = data[i].DOB;
				patientlist[j].street = data[i].address.street;
				patientlist[j].city = data[i].address.city;
				patientlist[j].state = data[i].address.state;
				patientlist[j].zip = data[i].address.zip;
				patientlist[j].insurance = data[i].insurance;
				patientlist[j].insurancenum = data[i].insuranceNumber;
				j++;
			}
		}

		CreateResultsTable(patientlist);
	}

	// This functions takes in an array of patients and displays them in a table.
	function CreateResultsTable(patientlist) {
		//console.log("select");
		$("#tabs").tabs("select", 0);
		// checks if no patient is found
		if(patientlist.length == 0) {
			$("#searchresults").text("NO SEARCH RESULTS FOUND!");
			$("#searchstatus").text("");
			$("#searchresulttable").text("");
			return;
		}
		else {
			//$("#searchresults").text("SEARCH RESULTS FOR \"" + searchname + "\" :");
			$("#searchstatus").text("The following patient(s) are found. Please select the patient you are looking for.");
		}

		// clears current table for new search
		$("#searchresulttable").text("");

		// headers for the table columns
		$("#searchresulttable").append(
			$("<tr>")
			.addClass("search-header")
			.append(
				$("<th>").append("NAME", "</th>"),
				$("<th>").append("DOB", "</th>"),
				$("<th>").append("ADDRESS", "</th>"),
				$("<th>").append("INSURANCE", "</th>")
			)
		);

		// loops through every patient and store patient info in a table.
		var temp;
		for(var i=0; i < patientlist.length; i++) {
			temp = patientlist[i].id;
			$("#searchresulttable").append(
				$("<tr>")
				.css("cursor", "pointer")
				.css("cursor", "hand")			
				.click(function(){
					
					Details.addPatientTab(temp);
					})
				.addClass("search-row")
				.append(
					$("<td>")
					.append(
						$("<a>")
							.append(patientlist[i].fullname, 
						"</a>"),
					"</td>"),

					$("<td>").append(
						patientlist[i].dob, 
					"</td>"),

					$("<td>").append(
						patientlist[i].street, ", ",
						patientlist[i].city, ", ",
						patientlist[i].state, " ",
						patientlist[i].zip, 
					"</td>"),

					$("<td>").append(
						patientlist[i].insurance, ", #", 
						patientlist[i].insurancenum, 
					"</td>"),
				"</tr>")
			);
		}
	}

	// this function grabs search values from the user and performs
	// a general search and returns an array of patients found
	function GeneralSearch() {
		// grab all search fields for general search
		generalname  = $("#generalname").val(); 
		generaldob 	 = $("#generaldob").val();
		ssnum 		 = $("#ssnum").val(); 
		insurance 	 = $("#insurance").val();
		insurancenum = $("#insurancenum").val(); 
		treatment 	 = $("#treatment").val();

		if((insurancenum != "" && insurance == "") || (insurancenum == "" && insurance != ""))
		{
			$("#search_error").html("Both insurance fields must be filled if searching by insurance agent.");	
			return;
		}
		
		// clear all fields after button press
		$("#generalname").val("");
		$("#generaldob").val("");
		$("#ssnum").val("");
		$("#insurance").val("");
		$("#insurancenum").val("");
		$("#treatment").val("");

		var patientlist = new Array();
		data = g_patient_info;
		var j = 0;

		for (var i in data) {
			if(data[i]['name'].toLowerCase() == generalname.toLowerCase()             || 
			   data[i]['DOB'] == generaldob               ||
			   data[i]['ssn'] == ssnum                    || 
			   data[i]['insurance'] == insurance          ||
			   data[i]['insuranceNumber'] == insurancenum ) {
				   
				patientlist[j] = new Object();
				patientlist[j].id = i;
				patientlist[j].fullname = data[i].name;
				patientlist[j].dob = data[i].DOB;
				patientlist[j].street = data[i].address.street;
				patientlist[j].city = data[i].address.city;
				patientlist[j].state = data[i].address.state;
				patientlist[j].zip = data[i].address.zip;
				patientlist[j].insurance = data[i].insurance;
				patientlist[j].insurancenum = data[i].insuranceNumber;
				j++;
				   
				
			}
		}
		if(patientlist.length == 0)
		{
			$("#search_error").html("No results found. Please change your search criteria.");
		}
		else
		{
			g_treatmentSearch = treatment;
			CreateResultsTable(patientlist);
		}
		
	}