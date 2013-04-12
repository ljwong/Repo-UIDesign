//load this script when page loads
$(document).ready(
/*
	function() {	
		// if anything with class of "searchtabs" is clicked
		
		$('.searchtab').click(
			function() {
				// make current tab inactive
				$('#searchbox > .searchtabs > li.searchactive').removeClass('searchactive');  
				// make clicked tab active
				$(this).parent().addClass('searchactive');
				// make current visible tab content invisible
				$('#searchbox > .searchtab_content_container > div.searchtab_content_active').removeClass('searchtab_content_active');
				// make clicked tab content visible
				$(this.rel).addClass('searchtab_content_active');
			}
		);
	}*/
);

	// Function that grabs search values from user and searches for an
	// existing patient
	function SearchForExistingPatient () {
		// grab all search fields for existing patient
		existname 	 = $("#existname").val();
		existdob 	 = $("#existdob").val();
			
		// clear all fields after button press
		$("#existname").val("");
		$("#existdob").val("");

		$.getJSON('data/patient_info.json',
			function(data) {
				var patientlist = new Array();
				var j = 0;

				for (var i in data.patient_info) {
					if(data.patient_info[i].name == existname || data.patient_info[i].DOB == existdob) {
						patientlist[j] = new Object();
						patientlist[j].fullname = data.patient_info[i].name;
						patientlist[j].dob = data.patient_info[i].DOB;
						patientlist[j].street = data.patient_info[i].address.street;
						patientlist[j].city = data.patient_info[i].address.city;
						patientlist[j].state = data.patient_info[i].address.state;
						patientlist[j].zip = data.patient_info[i].address.zip;
						patientlist[j].insurance = data.patient_info[i].insurance;
						patientlist[j].insurancenum = data.patient_info[i].insuranceNumber;
						j++;
					}
				}

				CreateResultsTable(patientlist);
			}
		);
	}

	// This functions takes in an array of patients and displays them in a table.
	function CreateResultsTable(patientlist) {
		// checks if no patient is found
		if(patientlist.length == 0) {
			$("#searchresults").text("NO SEARCH RESULTS FOUND!");
			$("#searchstatus").text("");
			$("#searchresulttable").text("");
			return;
		}
		else {
			$("#searchresults").text("SEARCH RESULTS FOR \"" + existname + "\" :");
			$("#searchstatus").text("There are multiple matches in our database. Please select the patient you want.");
		}

		// clears current table for new search
		$("#searchresulttable").text("");

		// headers for the table columns
		$("#searchresulttable").append(
			$("<tr>").append(
				$("<th>").append("NAME", "</th>"),
				$("<th>").append("DOB", "</th>"),
				$("<th>").append("ADDRESS", "</th>"),
				$("<th>").append("INSURANCE", "</th>")
			)
		);

		// loops through every patient and store patient info in a table.
		for(var i=0; i < patientlist.length; i++) {
			$("#searchresulttable").append(
				$("<tr>").append(
					$("<td>").append(
						$("<a>")
							.attr("href", "#")
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

		// clear all fields after button press
		$("#generalname").val("");
		$("#generaldob").val("");
		$("#ssnum").val("");
		$("#insurance").val("");
		$("#insurancenum").val("");
		$("#treatment").val("");

		var patientlist = new Array();
		$.getJSON('patient_info.json',
			function(data) {
				var j = 0;
				var treatmentfound = 0;

				for (var i in data.patient_info) {
					for (var k in data.patient_info.patientHistory.history) {
						if (data.patient_info.patientHistory.history[k].treatment == treatment)
							treatmentfound = 1;
					}
					if(data.patient_info[i].name == generalname             || 
					   data.patient_info[i].DOB == generaldob               ||
					   data.patient_info[i].ssn == ssnum                    || 
					   data.patient_info[i].insurance == insurance          ||
					   data.patient_info[i].insuranceNumber == insurancenum ||
					   treatmentfound == 1) {

					}
				}
			}
		);

		return patientlist;
	}