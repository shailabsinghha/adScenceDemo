let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    // document ready
   	//alert("Document ready");
    var div_element = document.getElementById('div1');

    var node = document.createElement("img");
    var att = document.createAttribute("src");

    att.value = "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?h=350&auto=compress&cs=tinysrgb"; 
   	node.setAttributeNode(att);
    div_element.appendChild(node);   
  	//alert("Node added");
   	
   	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://ip-api.com/json", false);
	xhr.send();

	console.log(xhr.status);
	console.log(xhr.statusText);

	var json_response_obj = JSON.parse(xhr.response);

	var ip_details = document.createElement('div');
	

	for( var x in  json_response_obj){
	//	console.log(x.toUpperCase() + ':  ' +json_response_obj[x].toUpperCase());
		ip_details.innerHTML+= x.toUpperCase(	) + ':  ' + json_response_obj[x].toString().toUpperCase()+'</br>'	;

	}
	// 	NOW ADDING THE ELEMENT TO THE DIV FOR MAKING THE IP ADRESS APPEAR
	div_element.appendChild(ip_details);

   }
}, 100);
