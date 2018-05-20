/*
function getHighlights(){
	var highlightsJSON = "highlights.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
		// var html = "";
		var currentElement = "";
		var myArrLength = myArr.length;
		
		// loads the current stylesheet as a variable
		var myStyle = document.styleSheets[0]; 
		
	
	
		
		// HTML Template to create each highlight box
		
		// <div id="highlightXXX">
		// <a href="#"><img src="XXX" alt="XXX" ></a>
		// <div id="highlightXXX-title">XXX</div>
		// <div id="highlight1-descXXX">XXX</div>
		// </div>
		
		
		
		for(var i = 0; i< myArrLength; i++){
			var html = "";
			var idNumber = i+1;
			var src = myArr[i].src;
			var title = myArr[i].title;
			var desc = myArr[i].desc;
			var href = myArr[i].href;
			var bgColor = "rgb(255,255,255)";
			
			
			// creates the CSS rules for each highlight
			createHighlightCSS(myStyle, idNumber, bgColor);
			
			
			var mainHighlightContainer = document.createElement("div");
			var mainHighlightContaineriD = "highlight" + idNumber;
			mainHighlightContainer.id = mainHighlightContaineriD;
			var imageAnchorTag = document.createElement("A");
			imageAnchorTag.href = href;
			var highlightImg = document.createElement("IMG");
			highlightImg.src = src;
			highlightImg.alt = title;
			imageAnchorTag.appendChild(highlightImg);
			mainHighlightContainer.appendChild(imageAnchorTag);
			var highlightTitle = document.createElement("div");
			highlightTitle.id = "highlight" + idNumber + "-title";
			var titleTextNode = document.createTextNode(title);
			highlightTitle.appendChild(titleTextNode);
			mainHighlightContainer.appendChild(highlightTitle);
			var highlightDesc = document.createElement("div");
			highlightDesc.id = "highlight" + idNumber + "-desc";
			var descTextNode = document.createTextNode(desc);
			highlightDesc.appendChild(descTextNode);
			mainHighlightContainer.appendChild(highlightDesc);
			document.getElementById("highlights-container").appendChild(mainHighlightContainer);
			
		}

        
    }
};
xmlhttp.open("GET", highlightsJSON, true);
xmlhttp.send(); 
}
*/


//innerHTML <-> insertAdjacentHTML function

function getHighlights(){
	var highlightsJSON = "highlights.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
		// var html = "";
		var currentElement = "";
		var myArrLength = myArr.length;
		
		// loads the current stylesheet as a variable
		var myStyle = document.styleSheets[0]; 
		
	
	
		
		// HTML Template to create each highlight box
		
		// <div id="highlightXXX">
		// <a href="#"><img src="XXX" alt="XXX" ></a>
		// <div id="highlightXXX-title">XXX</div>
		// <div id="highlight1-descXXX">XXX</div>
		// </div>
		
		
		
		for(var i = 0; i< myArrLength; i++){
			var html = "";
			var idNumber = i+1;
			var src = myArr[i].src;
			var title = myArr[i].title;
			var desc = myArr[i].desc;
			var href = myArr[i].href;
			var bgColor = "rgb(255,255,255)";
			
			
			// creates the CSS rules for each highlight
			createHighlightCSS(myStyle, idNumber, bgColor);
			
			html += `<div id="highlight${idNumber}">`;
			html += `<a href="${href}"><img src="${src}" alt="${title}" ></a>`;
			html += `<div id="highlight${idNumber}-title">${title}</div>`;
			html += `<div id="highlight${idNumber}-desc">${desc}</div>`;
			html += `</div>\n`
			document.getElementById("highlights-container").insertAdjacentHTML("beforeend", html);
		}
		
    }
};
xmlhttp.open("GET", highlightsJSON, true);
xmlhttp.send(); 
}






/* CSS template for each highlight.

#highlight3 {
	position: relative;
	width: ${widthAndHeight};
	height: ${widthAndHeight};
	background: blue;
	display: inline-block;
}

#highlight3 img{
	position: relative;
	width: ${widthAndHeight};
	height: ${widthAndHeight};
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
	width: ${widthAndHeight};
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

function createHighlightCSS(myStyle, idNumber, color){
	var widthAndHeight = "300px";
	var titleFontSize = "1.6em";

	myStyle.insertRule(
	`#highlight${idNumber} {
		position: relative; 
		width: ${widthAndHeight}; 
		height: ${widthAndHeight}; 
		background: ${color}; 
		display: inline-block;}`
	); 
	
	myStyle.insertRule(
	`#highlight${idNumber} img {
		position: relative;
		object-fit: cover;
		width: ${widthAndHeight};
		height: ${widthAndHeight};
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
		font-size: ${titleFontSize};
		background-color: rgba(255,255,255,0.5);
		width: ${widthAndHeight};
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









