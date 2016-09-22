function preloader(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("content").style.display = "block";
        }//preloader
        window.onload = preloader;
        /*
         window.onload = getname;
         window.onload=loadXMLDoc;

function getname() {              //Read the Name of restaurant from server and Display 
    
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("rest_name").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "google.php?q=" + "Restaurant_name", true);
        xmlhttp.send();
    }

function TSD_tab(tno) {         // Send TSD  table info to server
    if (tno.length == 0) { 
                return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                return;
            }
        };
        xmlhttp.open("GET", "google.php?q=" + tno , true);
        xmlhttp.send();
    }
}    
function TSD_tab(del_tno) {         // Send TSD table to delete info to server after user leaving restaurant
    if (del_tno.length == 0) { 
                return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                return;
            }
        };
        xmlhttp.open("GET", "google.php?q=" + del_tno , true);      //edit
        xmlhttp.send();
    }
}

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "google.xml", true);                  //edit
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Table No</th><th>Status</th><th>User Details</th><th>Contact</th><th>Time</th></tr>";
  var x = xmlDoc.getElementsByTagName("ABC");                  //
Edit  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("Table No")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
    "</td></tr>";
     x[i].getElementsByTagName("User Details")[0].childNodes[0].nodeValue +
    "</td></tr>";
     x[i].getElementsByTagName("Contact")[0].childNodes[0].nodeValue +
    "</td></tr>";
     x[i].getElementsByTagName("Time")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("TSD").innerHTML = table;
}    


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "google.xml", true);    //Read table from server
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}