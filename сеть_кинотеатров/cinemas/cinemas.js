function loadCinemas() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayCinemas(this);
        }
    };
    xhttp.open("GET", "cinemas.xml", true);
    xhttp.send();
}

function displayCinemas(xml) {
    var xmlDoc = xml.responseXML;
    var cinemas = xmlDoc.getElementsByTagName("cinema");

    var theatersDiv = document.querySelector('.theaters');

    for (var i = 0; i < cinemas.length; i++) {
        var name = cinemas[i].getElementsByTagName("name")[0].textContent;
        var location = cinemas[i].getElementsByTagName("location")[0].textContent;
        var imageSrc = cinemas[i].getElementsByTagName("image")[0].textContent;

        var theaterDiv = document.createElement('div');
        theaterDiv.classList.add('theater');

        var textDiv = document.createElement('div');
        textDiv.classList.add('text');

        var nameParagraph = document.createElement('p');
        nameParagraph.textContent = name;

        var locationParagraph = document.createElement('p');
        locationParagraph.textContent = 'Location: ' + location;

        var img = document.createElement('img');
        img.src = imageSrc;

        textDiv.appendChild(nameParagraph);
        textDiv.appendChild(locationParagraph);

        theaterDiv.appendChild(img);
        theaterDiv.appendChild(textDiv); 

        theatersDiv.appendChild(theaterDiv);
    }
}

window.onload = function() {
    loadCinemas();
};