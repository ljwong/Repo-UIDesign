function Details()
{
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
		if($("#tabs-"+id).length > 0)
		{
			$( "#tabs" ).tabs("select", "#tabs-"+id);
			return;
		}
		$( "#tabs" ).tabs("add", "#tabs-"+id, g_patient_info[id]['name']);		
		this.PatientTab (id, g_patient_info[id], true);
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
		  selected:1 
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
							.addClass("sidebar-element") 
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
			return $( "<div/>" );	
		};
		function createPatientInfo (){
			return $( "<div/>" )
						.append(
							$("<h4/>").append("Patient Info")
						)
						.append( 
							$("<p/>").append("DOB: " + val['DOB'])
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
							$("<p/>").append('Height: '+ val['physical']['height'])
						)
						.append( 
							$("<p/>").append('Weight: '+val['physical']['weight'] )
						)
						.append( 
							$("<p/>").append('Age: '+ val['physical']['age'] )
						)
						.append( 
							$("<p/>").append('Gender: '+ val['physical']['gender'] )
						)
						
			;	
			
			};
		function createPatientHistory(){
			var div = $( "<div/>" )
						.append( 
							$("<h4/>").append('History' )
						)		
			;
			$.each(val['patientHistory']['history'], function(index, element) {
            	div.append(
					$("<p/>").append('Treatment: ' + val['patientHistory']['history'][index]['treatment'])
				)                
            });
			return div;
		};
		function createTreatmentPlan(){
			return $( "<div/>" )
						.append( 
							$("<h4/>").append('Treatment Plan' )
						)		
						
			;	
			
		};

	}

}


/*
$('#list-of-patients').append('<li><a href=\"#tabs-'+ counter + '\">' + val['name'] + '</a></li>');
		$('#tabs').append('<div id=tabs-' + counter +' ></div>');
	
		var sub_tab = '<div id=\"inner-tabs'+ counter +'\"><ul id="list-of-menu"><li><a href="#tabs1">Coverage Plan</a></li><li><a href="#tabs2">Patient Info</a></li><li><a href="#tabs3">Patient History</a></li><li><a href="#tabs4">Treatment Plan</a></li></ul>';
		
		
		sub_tab += '<div id=\"tabs'+ 1 +'\">';
		sub_tab +='</div>';
	
		sub_tab += '<div id=\"tabs'+ 2 +'\">';
		sub_tab += '<h4>patient info</h4><p>DOB: ' + val['DOB']+ '</p>' + '<p>Address: '+ val['address']['street']+ ' ' +val['address']['city']+ ' ' +val['address']['state']+ ' ' +val['address']['zip'] + '</p>';
		sub_tab += '<h4>Insurance</h4><p>Company: '+ val['insurance']+ '</p><p>ID#: '+ val['insuranceNumber'] + '</p>';
		sub_tab += '<h4>Physical</h4><p>Height: '+ val['physical']['height'] + '</p><p>Weight: '+val['physical']['weight'] +'</p><p>Age: '+ val['physical']['age'] +'</p><p>Gender: '+ val['physical']['gender'] + '</p>';
		sub_tab += '</div>';
	
		sub_tab += '<div id=\"tabs'+ 3 +'\"><h4>History</h4>';
	
		for(var index = 0; index < val['patientHistory']['history'].length; index++)
		{
		  sub_tab += '<p>ID: ' + val['patientHistory']['history'][index]['id'] +' ';
		  sub_tab +=  'Treatment: ' + val['patientHistory']['history'][index]['treatment']+ '</p>';
		}
		sub_tab += '</div>';
	
		sub_tab += '<div id=\"tabs'+ 4 +'\"><h4>Treatment Plan</h4>';
		

	
		sub_tab +='</div>';
	
		sub_tab += '</div>';
	
		var tabs_id = '#tabs-' + counter;
		$(tabs_id).append(sub_tab);
	
		$( "#inner-tabs" + counter).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#inner-tabs" + counter + " li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	
		counter++;
	  });
*/