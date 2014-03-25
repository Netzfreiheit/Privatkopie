<!-- UnterstuetzerInnen-Counter -->
	var counterNeed;
	var counterHave;

	$.getJSON("counter.json", function(json) { 	
		$('.counterNeedText').prepend(json.need); 
		counterNeed = json.need;
	});
	
	$.getJSON("counter.json", function(json) { 	
		$('.counterOnlineText').prepend(json.online); 
		counterOnline = json.online;
	});
	
	$.getJSON("counter.json", function(json) { 	
		$('.counterPaperText').prepend(json.paper); 
		counterPaper = json.paper;
	});

	$.getJSON("counter.json", function(json) { 	
		$('.counterHaveText').prepend(json.have); 
		counterHave = json.have;
		counterHave = ( (counterHave*100)/counterNeed )+("%");

		$('#counterHave').width(counterHave); 
	});
	