function example(){

// Example to append html code using jquery
$("#fingerprints").append(
						$( "<li/>" )
							.attr("id", "row" + i)
							.append(
								$("<div/>")
								.append(
									$( "<img/>" )
									.addClass( "movie-fingerprint" )
									.attr( "src", data[i].image )
									.attr( "id" , "title"+i)
									.data( "title", data[i].title )
									.attr("id", "movie-title" + i)
									.attr("ondrop", "drop(event)")
									.attr("ondragover", "allowDrop(event)")
									.click(function (ev){titleDrop(ev, _self);})
								).append( $( "<div/>" )
									.addClass( "title-dropzone" )
								)
							)
						)	
}