# score-
Cahiers des charges

Les objectifs :
•	Informer les utilisateurs sur le score des matchs en PL, Ligue1 et Liga gratuitement
Résultat attendus :
•	Afficher les scores ciblés sur certain championnat
•	Améliorer le suivi du football
•	Informer en premier par rapport à la concurrence 
Inspiration :
•	Flashscore
Nombre de pages :
•	Une par championnat
Langue :
•	Français
Public visés :
•	Les puristes de football ou encore les amateurs 
Le nom :
•	Hess Score
Le slogan : 
•	Même dans la Hess, on te met ton Score 
 
Le API :
Fetch
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
jQuery
var settings = {
  "url": "https://v3.football.api-sports.io/leagues",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx",
    "x-rapidapi-host": "v3.football.api-sports.io"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
XHR
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://v3.football.api-sports.io/leagues");
xhr.setRequestHeader("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
xhr.setRequestHeader("x-rapidapi-host", "v3.football.api-sports.io");

xhr.send();

