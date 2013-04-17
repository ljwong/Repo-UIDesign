function Details()
{
	var currentId = 0;
	this.init = function ()
	{
		
		this.createTabs(g_patient_info);
		
		
	}
	
	this.addSearchTab = function()
	{
		$('#list-of-patients').prepend(
			$("<li/>").append(
				$( "<a/>" )
					.attr("href", "#tabs-search")
					.append("Search Results")
			)
		);
		$('#tabs').append(
			$("<div/>")
			.attr("id", "tabs-search")
			.append($("<div/>")
				.addClass("search-tab")		
				.append(
					$("<p/>")
						.attr("id", "searchresults")
						.addClass("printsearchresult")
				)
				.append(
					$("<p/>")
						.attr("id", "searchstatus")
						.addClass("printmulmatches")
				)
				.append(
					$("<table>")
						.attr("id", "searchresulttable")
						.attr("border", "1")
				)
			)
		);
	}
	
	this.addPatientTab = function(id)
	{
		//console.log();
		g_patient_info[id]["app_currentTreatmentSearch"] = g_treatmentSearch;
		g_treatmentSearch = "";
		if($("#tabs-"+id).length > 0)
		{
			$("#coverage_treatment_result-"+id).html(g_patient_info[id]["app_currentTreatmentSearch"] + getTreatmentVerification());
			$( "#tabs" ).tabs("select", "#tabs-"+id);
			
			return;
		}
		$( "#tabs" ).tabs("add", "#tabs-"+id, g_patient_info[id]['name']);		
		this.PatientTab (id, g_patient_info[id], true);
		$("#coverage_treatment_result-"+id).html(g_patient_info[id]["app_currentTreatmentSearch"] + getTreatmentVerification());

		$("#tabs").tabs("select", "#tabs-"+id);
		
	}
	
	this.createTabs = function(patients)
	{
		// Creates the tabs
		var _this = this;
		var limit = 5;
		var counter = 0;
	  $.each(patients, function(key, val) {
		if(counter >= limit)
			return;
		_this.PatientTab(key, val);
		counter++;
	  });
	  
	  this.addSearchTab();
	 // $(".inner-tab").tabs()//.addClass( "ui-tabs-vertical ui-helper-clearfix" );
		//$( ".inner-tab li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );	
	  $( "#tabs" ).tabs({
		  selected:1,
		  select: function(event, ui) { 
		  		
		  		var arr = ui.panel.id.split("-");
				
				var id = arr[1];
				
				id = parseInt(id);
				if(id == "search" || isNaN(id) )
				{
					
					$("#chat-header").html("Live Chat");
					return;
				}
				else
				{
					$("#chat-header").html("Asking Help For: &nbsp;&nbsp;&nbsp;"+g_patient_info[id]['name'] + ", " + g_patient_info[id]['insurance']);
				}
				currentId = id;
		 	 } 
		  });	
	}
	
	this.PatientTab = function (id, val, skipList)
	{
		
		if(!skipList)
		{
			$('#list-of-patients').append(
				$("<li/>").append(
					$( "<a/>" )
						.attr("href", "#tabs-"+ id)
						.append(val['name'])
				)
			);
			$('#tabs').append(
				$("<div/>")
				.attr("id", "tabs-" + id)
				.append($("<div/>")
					.append(createSideBar())
				)
			);
		}
		else
		{
			
			$("#tabs-" + id)
				.append($("<div/>")
					.append(createSideBar())
				)
			;
		}
		
		
		
			
		
		function createSideBar (){
			
			return sub_tab = 
				$("<div/>")
					.attr("id", "inner-tabs" + id)
					.append($("<div/>")
						.addClass("sidebar")
						.append( $("<div/>")
							.append("<h3 align='center'>Menu</h3>")
							.css("border-bottom", "2px solid black"))
						.append( $("<div/>")
							.addClass("sidebar-element") 
							.addClass("ui-corner-all") 
							.click(function(){
									
									$(".pd-"+id).css("display", "none");
									$("#coverage_plan_tab"+id).css("display", "inline-block");
									})
							.append( $("<a/>")
								.attr("href", "#coverage_plan_tab")
								
								.append("Coverage Plan")
							) 
						)
						.append( $("<div/>") 
							.addClass("sidebar-element")
							.addClass("ui-corner-all") 
							.append( $("<a/>")
								.attr("href", "#patient_info_tab")
								.click(function(){
									
									$(".pd-"+id).css("display", "none");
									$("#patient_info_tab"+id).css("display", "inline-block");
									})
								.append("Patient Info")
								
							)
						)
						.append( $("<div/>") 
							.addClass("sidebar-element")
							.addClass("ui-corner-all") 
							.click(function(){
									
									$(".pd-"+id).css("display", "none");
									$("#patient_history_tab"+id).css("display", "inline-block");
									})
							.append( $("<a/>")
								.attr("href", "#patient_history_tab")
								.append("Patient History")
								
							)
						)
						.append( $("<div/>") 
							.addClass("sidebar-element")
							.addClass("ui-corner-all") 
							.click(function(){
									
									$(".pd-"+id).css("display", "none");
									$("#treatment_plan_tab"+id).css("display", "inline-block");
									})
							.append( $("<a/>")
								.attr("href", "#treatment_plan_tab")
								.append("Treatment Plan")
								
							)
						)
					)	
				.append( $("<div/>" )
						.attr("id", "coverage_plan_tab"+id)
						.addClass("patient-display")
						.addClass("pd-"+id)
						.css("display", "inline-block")
						.append(createCoveragePlan())
					)
					.append( $("<div/>" )
						.attr("id", "patient_info_tab"+id)
						.addClass("patient-display")
						.addClass("pd-"+id)
						.css("display", "none")
						.append(createPatientInfo())
					)
					.append( $("<div/>" )
						.attr("id", "patient_history_tab"+id)
						.addClass("patient-display")
						.addClass("pd-"+id)
						.css("display", "none")
						.append(createPatientHistory())
					)
					.append( $("<div/>" )
						.attr("id", "treatment_plan_tab"+id)
						.addClass("patient-display")
						.addClass("pd-"+id)
						.css("display", "none")
						.append(createTreatmentPlan())
					)
				
		};
		function createCoveragePlan (){
			return $( "<div/>" )
						.append(
							$("<h3 align='center'/>").append("Coverage Plan").css("text-decoration", "underline")
						)
						.append( $("<div/>")
							.append($("<h4/>")
								.attr("id", "coverage_treatment_result-"+id)
								.css("color", "#930")
							)
						)
						.append( $("<div/>")
							.append(randomCoveragePlan())
						)
			;	
		};
		function createPatientInfo (){
			return $( "<div/>" )
						.append(
							$("<h3 align='center'/>").append("Patient Information").css("text-decoration", "underline")
						)
						.append(
							$("<h4/>").append("Personal Details")
						)
						.append( 
							$("<p/>").append("Date of birth: " + val['DOB'].substr(0,2) + "-" + val['DOB'].substr(2,2) + "-" + val['DOB'].substr(4,4))
						)
						.append(
							$("<p/>").append("Address: " + val['address']['street']+ ' ' +val['address']['city']+ ' ' +val['address']['state']+ ' ' +val['address']['zip'])
						)
						.append(
							$("<h4/>").append("Insurance")
						)
						.append( 
							$("<p/>").append('Company: '+ val['insurance'])
						)
						.append( 
							$("<p/>").append("ID#: " + val['insuranceNumber'])
						)
						.append(
							$("<h4/>").append("Physical")
						)
						.append( 
							$("<p/>").append('Height: '+ val['physical']['height'].substr(0,1) + "'" + val['physical']['height'].substr(1,1) + '"')
						)
						.append( 
							$("<p/>").append('Weight: '+val['physical']['weight'] + " kg" )
						)
						.append( 
							$("<p/>").append('Age: '+ val['physical']['age'] )
						)
						.append( 
							$("<p/>").append('Gender: '+ val['physical']['gender'].charAt(0).toUpperCase() + val['physical']['gender'].slice(1).toLowerCase())
						)
						
			;	
			
			};
		function createPatientHistory(){
			var div = $( "<div/>" )
						.append( 
							$("<h3 align='center'/>").append('History' ).css("text-decoration", "underline")
						)
			;
			var table = $("<table/>")
								.attr("id", "history-table-"+id)
								.addClass("history-table")
								.append( $("<tr/>")
									.append( $("<th/>").append("Treatment"))
									.append( $("<th/>").append("Date"))
								);
			
			$.each(val['patientHistory']['history'], function(index, element) {
            	table.append( $("<tr/>")
						.append( $("<td/>")
							.append(val['patientHistory']['history'][index]['treatment'])
							.addClass("history-data")
							)
						.append( $("<td/>")
							.append(randomDate())
							.addClass("history-data")
						)
				)
            });
			div.append(table);
			return div;
		};
		function randomDate()
		{
			var day = Math.round(Math.random() * 28 + 1);
			var	month = Math.round(Math.random() * 12 + 1);
			var year = 2012;
			return month + "-" + day + "-" + year;
		}
		function createTreatmentPlan(){
			g_patient_info[id]["app_currentPlan"] = 0;
			return $( "<div/>" )
						.append( 
							$("<h3 align='center'/>").append('Treatment Plan' ).css("text-decoration", "underline")
						)		
						.append(
							$ ( "<div/>" )
								.append( 
									$ ( "<table/>" )
										.attr("id", "treat-table-"+id)
										.append( $("<tr/>")
											.append( $("<th/>").append( "Code / Treatment" ))
											.append( $("<th/>").append( "Cost" ))
											.append( $("<th/>").append( "Insured Sum" ))
											.append( $("<th/>").append( "Overwrite Insured" ))
										)
										.append(addNewTreatment())
								)
								.append( $("<div/>")
										.addClass("treat-total")
										.attr("id", "treat-total-"+id)
										.html(recalculateTreatmentCost())
								)
								
								.append( $( "<button style='margin:10px;'/>")
										.addClass("ui-corner-all")
										.click(function(){
											$("#treat-table-"+currentId).append(addNewTreatment())
											})
										.append("Add Treatment")
								)
								.append( $( "<button style='margin:10px;'/>")
										.addClass("ui-corner-all")
										.click(function(){
											$("#treat-total-"+currentId).html(recalculateTreatmentCost());
											})
										.append("Recalculate")
								)
								.append( $( "<button style='margin:10px;'/>")
										.addClass("ui-corner-all")
										.click(function(){
											// Get each treatment, add to patient history
											$(".treat-input-code-s-"+currentId).each(function(index, element) {
                                                if($(element).val() == 'Select')
													return;
												var arr = $(element).val().split(": ");
												var treatment = arr[1];
												var d = new Date();
												var curr_date = d.getDate();
												var curr_month = d.getMonth();
												var curr_year = d.getFullYear();
												var date_s = curr_month + "-" + curr_date + "-" + curr_year;
												$("#history-table-"+currentId).append(
													$("<tr/>")
														.append( $("<td/>").append(treatment))
														.append( $("<td/>").append(date_s))
													
												)
												
                                            });
											
											// Clear this div											
											$(".treat-row-"+currentId).remove();
											$("#treat-table-"+currentId).append(addNewTreatment());
											$("#treat-total-"+currentId).html(recalculateTreatmentCost());
											})
										.append("Complete Plan")
								)
						)
						
			;	
			
		};
		
		function recalculateTreatmentCost()
		{
			// get all the cost, insured, residue
			var total_cost = 0;
			$(".treat-input-cost-s-"+currentId).each(function(index, element) {
				//console.log(element);
				var val = $(this).html();
                if(!isNaN(parseInt(val)))
					total_cost += parseInt(val);
				
            });
			var insured_cost = 0;
			$(".treat-input-insured-s-"+currentId).each(function(index, element) {
				//console.log(element);
				var insured = $(this).html();
				var arr = $(this).attr("id").split("-");
				var id = arr[1];
				var overwrite = $("#toverwrite-"+id).val();
				
                if(!isNaN(parseInt(overwrite)))
					insured_cost += parseInt(overwrite);
				else if(!isNaN(parseInt(insured)))
					insured_cost += parseInt(insured);
					
				
            });
			return "Total Cost: $" + total_cost + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Insured: $" + insured_cost + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Pending: $" + (total_cost - insured_cost);
			
		}
		function addNewTreatment()
		{
			var tid = g_patient_info[currentId]["app_currentPlan"]++;
			
			return  $("<tr/>")
						.addClass("treat-row-"+currentId)
						.append( $("<td/>")
							.addClass("treat-input-code")	
							.append( getTreatmentCodes(tid))
						)
						.append( $("<td/>")
							.addClass("treat-input-cost")	
							.append( $("<span/>")
								.addClass("treat-input")	
								.addClass("treat-input-cost-s-"+currentId)	
								.attr("id", "tcost-"+tid)
							)						
						)
						.append( $("<td/>")
							.addClass("treat-input-insured")	
							.append( $("<span/>")
								.addClass("treat-input")
								.addClass("treat-input-insured-s-"+currentId)	
								.attr("id", "tinsured-"+tid)
							)						
						)
						.append( $("<td/>")
							.addClass("treat-input-overwrite")	
							.append( $("<input/>")
								.addClass("treat-input-overwrite-s-"+currentId)	
								.addClass("treat-input")	
								.attr("id", "toverwrite-"+tid)
							)						
						)

		};
		function getTreatmentCodes(tid)
		{
			if(!id)
				id = currentId;
			var select_dom = $("<select/>")
								.addClass("treat-input-code-s-"+id)	
								.addClass("treat-input")
								.attr("id", "tcode-"+tid)								
								.change(function(){
									
									var arr = $(this).val().split(":");
									var id = arr[0];
									
									var arr2 = $(this).attr("id").split("-");
									var tid = arr2[1];
									$("#tname-"+tid).html(g_treatment_info[id]['treatment']);
									$("#tcost-"+tid).html(g_treatment_info[id]['fee']);
									var percent = parseFloat(g_treatment_info[id]['fee']) * parseFloat(g_treatment_info[id]['insuranceCovered']["company"][0]['percentage']) / 100 
									$("#tinsured-"+tid).html(percent);
									
									$("#treat-total-"+currentId).html(recalculateTreatmentCost());
									})
								;
			select_dom.append( $("<option/>").append("Select"));
			for ( x in g_treatment_info )
				select_dom.append( $("<option/>")
						.append(x + ": " + g_treatment_info[x]['treatment'])
						);
			return select_dom;
		};
		
		function randomCoveragePlan()
		{
			var arr = [
				'Plan Type:  PPO<br />Deductible: $7,500<br />Coinsurance: 0%<br />Office Visit for Primary Doctor: No Charge after deductible<br />Office Visit for Specialist: No Charge after deductible<br />Coinsurance: No Charge after deductible<br />Annual Deductible: Individual:$7,500<br />Separate Prescription Drugs Deductible: $1000 Individual; Applies to Levels 2, 3, 4<br />Prescription Drugs: Generic: Rx Deductible for Levels 2, 3, 4, then Level 1: $15 copay; Level 2: $40 copay; Level 3: $65 copay; Level 4: 35% copay up to $5,000 maximum out of pocket. Levels based on specific drug <br />Brand: Rx Deductible for Levels 2, 3, 4, then Level 1: $15 copay; Level 2: $40 copay; Level 3: $65 copay; Level 4: 35% copay up to $5,000 maximum out of pocket. Levels based on specific drug <br />Non-Formulary: Rx Deductible for Levels 2, 3, 4, then Level 1: $15 copay; Level 2: $40 copay; Level 3: $65 copay; Level 4: 35% copay up to $5,000 maximum out of pocket. Levels based on specific drug<br />Annual Out-of-Pocket Limit: Individual:$7,500 Includes deductible<br />',
				'Plan Type: Network<br />Office Visit for Primary Doctor: History and Exam: visit 1-4 $35 copay, deductible waived; visit 5+ deductible then 30% Coinsurance<br />Office Visit for Specialist: History and Exam: visit 1-4 $35 copay, deductible waived; visit 5+ deductible then 30% Coinsurance<br />Coinsurance: 30% after deductible<br />Annual Deductible: Individual:$10,000<br />Separate Prescription Drugs Deductible: None<br />Prescription Drugs: Generic: $15 Copay, no deductible <br />Brand: Not Covered <br />Non-Formulary: Not Covered <br />(See sample list of drug)<br />Annual Out-of-Pocket Limit: Individual:$10,000<br />Does not include deductible<br />Lifetime Maximum: Unlimited<br />Health Savings Account (HSA) Eligible: No<br />Out-of-Network Coverage: Yes  <br />',
				'Plan Type: PPO<br />Office Visit for Primary Doctor: 100% after $20 doctor office visit copay<br />Office Visit for Specialist: 100% after $20 doctor office visit copay<br />Coinsurance: None<br />Annual Deductible: Individual:$1,000<br />Separate Prescription Drugs Deductible: Medical Plan Deductible Applies<br />Prescription Drugs: Generic: 20% Coinsurance after deductible <br />Brand: 20% Coinsurance after deductible <br />Non-Formulary: 20% Coinsurance after deductible<br />Annual Out-of-Pocket Limit: Individual:$1,000<br />Does not include deductible<br />Lifetime Maximum: Unlimited<br />Health Savings Account (HSA) Eligible:  No<br />Out-of-Network Coverage: Yes  (Details in plan brochure below)<br />Out of Country Coverage: Yes. Paid as in-network benefits if through a WorldWide BlueCard Provider <br />'
				
			];
			return arr[Math.round(Math.random()*2)];
		};

	}
	function getTreatmentVerification()
	{
		var arr = [	" : not covered under this plan.", 
					" : 100% covered under this plan.",
					" : 80% covered under this plan.",
					" : 70% covered under this plan.",
					" : 30% covered under this plan.",
					" : 15% covered under this plan.",
					];
		return arr[Math.round(Math.random()*arr.length)];
	};

}