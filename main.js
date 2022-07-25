function fireUp() {
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
	var summary = JSON.parse(request.responseText);	
	myFunction();
}

request.open("GET","summary.json" , true);
request.send();

let placeholder = document.querySelector("#tbody");
let out = "";
for(let x of summary) {
	out +=`
	    <tr>
		    <td><img src='${x.img}'></td>
			<td>${x.title}</td>
			<td>${x.price}</td>
		
		`;

		
	placeholder.innerHTML = out;
document.getElementById("title0").innerHTML = x.title;
}
} 
}
function loadUp() {
var desc = new XMLHttpRequest();
desc.open("GET", "description.json", true);
desc.send();
desc.onload = function() {
var descr = JSON.parse(this.responseText);
document.getElementById("descr1").innerHTML = descr[0].description;	
}

}

function riseUp() {
var desc = new XMLHttpRequest();
desc.open("GET", "description.json", true);
desc.send();
desc.onload = function() {
var descr = JSON.parse(this.responseText);
document.getElementById("descr2").innerHTML = descr[1].description;	
}

}

function rollUp() {
var desc = new XMLHttpRequest();
desc.open("GET", "description.json", true);
desc.send();
desc.onload = function() {
var descr = JSON.parse(this.responseText);
document.getElementById("descr3").innerHTML = descr[2].description;	
}
}

function holUp() {
var desc = new XMLHttpRequest();
desc.open("GET", "description.json", true);
desc.send();
desc.onload = function() {
var descr = JSON.parse(this.responseText);
document.getElementById("descr4").innerHTML = descr[3].description;	
}

}