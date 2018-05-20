
function getHighlights(){
	var highlightsJSON = "highlights.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
		var html = "";
		var currentElement = "";
		var myArrLength = myArr.length;
		
		var myStyle = document.styleSheets[0]; // SS loads the stylesheet as a variable 
		
		/* Template
		
		<div id="highlightXXX">
		<a href="#"><img src="XXX" alt="XXX" ></a>
		<div id="highlightXXX-title">XXX</div>
		<div id="highlight1-descXXX">XXX</div>
		</div>
		
		*/
		
		for(var i = 0; i< myArrLength; i++){
			var idNumber = i+1;
			var src = myArr[i].src;
			var title = myArr[i].title;
			var desc = myArr[i].desc;
			var href = myArr[i].href;
			
			createHighlightCSS(myStyle, idNumber);
			html += `<div id="highlight${idNumber}">`;
			html += `<a href="${href}"><img src="${src}" alt="${title}" ></a>`;
			html += `<div id="highlight${idNumber}-title">${title}</div>`;
			html += `<div id="highlight${idNumber}-desc">${desc}</div>`;
			html += `</div>\n`
		}

        document.getElementById("highlights-container").innerHTML = html;
    }
};
xmlhttp.open("GET", highlightsJSON, true);
xmlhttp.send(); 
}

/* Template for CSS

#highlight3 {
	position: relative;
	width: 300px;
	height: 300px;
	background: blue;
	display: inline-block;
}

#highlight3 img{
	position: relative;
	width: 300px;
	height: 300px;
	display: inline-flex;
	opacity: 0.85;
	float: left;
}

#highlight3:hover img{
	opacity: 1;
	
}

#highlight3-title {
	position: absolute;
	font-size: 2em;
	background-color: rgba(255,255,255,0.5);
	width: 300px;
	text-align: center;	
}

#highlight3-desc {
	font-size: 1.1em;
	position: absolute;
	bottom: 0px;
	background-color: rgba(255,255,255,0.8);
	width: 280px;
	text-align: left;
	padding: 5px 10px 5px 10px;
	opacity: 0;
	transition: opacity 1s;
}

#highlight3:hover #highlight3-desc {
	opacity: 1.0;
}

*/

function createHighlightCSS(myStyle, idNumber){

	myStyle.insertRule(
	`#highlight${idNumber} {
		position: relative; 
		width: 300px; 
		height: 300px; 
		background: blue; 
		display: inline-block;}`
	); 
	
	myStyle.insertRule(
	`#highlight${idNumber} img {
		position: relative;
		width: 300px;
		height: 300px;
		display: inline-flex;
		opacity: 0.85;
		float: left;
	}`
	);

	myStyle.insertRule(
		`#highlight${idNumber}:hover img {
		opacity: 1;
	}`
	);

	myStyle.insertRule(
	`#highlight${idNumber}-title {
		position: absolute;
		font-size: 2em;
		background-color: rgba(255,255,255,0.5);
		width: 300px;
		text-align: center;
	}`
	);
	
	myStyle.insertRule(
	`#highlight${idNumber}-desc {
		font-size: 1.1em;
		position: absolute;
		bottom: 0px;
		background-color: rgba(255,255,255,0.8);
		width: 280px;
		text-align: left;
		padding: 5px 10px 5px 10px;
		opacity: 0;
		transition: opacity 1s;
	}`
	);

	myStyle.insertRule(
	`#highlight${idNumber}:hover #highlight${idNumber}-desc {
	opacity: 1.0;
	}`
	);
	
	
}
