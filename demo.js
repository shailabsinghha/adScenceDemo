$( document ). ready(function(){

	console.log('document is ready');
	$.ajax({url: "http://ip-api.com/json", success: function(result){
	$.each(result, function(key, value){
		$('#div1').append('<br>'+ key+' ' + value)	
	});	

   }});
});
