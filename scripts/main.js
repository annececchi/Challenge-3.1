

	// var api = "api.openweathermap.org/data/2.5/weather?q=London,uk";
	// var query = "&q=Amsterdam,nl";

function getAPIdata() {

	var url = "http://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Amsterdam,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city +'&units=metric';

	// krijg het huidige weer
	fetch(request)

	.then(function(response) {
		return response.json();
	})

	.then(function(response) {

		// Temperatuur wordt opgevraagd en afgerond door 'math.round'
		var temp = Math.round(response.main.temp);

		// Tempratuur word op de pagina laten zien
		document.getElementById('temp').innerHTML = temp + '&#176;C';

		// Advies wordt bepaald door temperatuur
		if(temp < 18) {
			document.getElementById('advies').innerHTML = "'Put on something warm, it's cold outside.'";
		}
		else {
			document.getElementById('advies').innerHTML = "'You don't have to wear a jacket, the weather is nice.'";
		}

	})

	.catch(function (error) {
		console.log('Request failed', error);
	});

}

getAPIdata();

// Animatie draaiende aarde
function animatePlanet() {
    TweenMax.to("#planet", 10 , {rotation:-360,ease:Power0.easeNone,repeat:-1});
}

animatePlanet();