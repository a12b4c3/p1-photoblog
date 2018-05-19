
function getHighlights(){
	var highlightsJSON = "https://raw.githubusercontent.com/a12b4c3/p1-photoblog/master/highlights.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var response = JSON.stringify(this.responseText);
        var myArr = JSON.parse(response);
		alert(myArr);
        document.getElementById("highlights-container").innerHTML = myArr[0].src;
    }
};
xmlhttp.open("GET", highlightsJSON, true);
xmlhttp.send(); 
}
