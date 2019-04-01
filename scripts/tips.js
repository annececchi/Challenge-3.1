
function getYesNoApi() {

	// get current weather
	fetch('https://yesno.wtf/api')

	.then(function(response) {
		return response.json();
	})

	.then(function(response) {

		// wat gebeurd hier?
		document.getElementById('answer').innerHTML = response.answer;
		document.getElementById('image').src = response.image;

		// wat gebeurd hier?
		if(response.answer == 'yes') {
			document.body.className = 'yes';
		} 
		else {
			document.body.className = 'no';
		}

	})

	.catch(function (error) {
		console.log('Request failed', error);
	});

}

getYesNoApi();

