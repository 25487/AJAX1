// bind HTML id
let loadDocument = docment.getElementById("loadDocument");
// koppel eventlistener
loadDocument.addEventListener('click', ajax);
// ajax functie
function ajax() {
  let xmlhttp = newXMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
xmlhttp.open("GET", "text.txt", true);
xmlhttp.send();
}
