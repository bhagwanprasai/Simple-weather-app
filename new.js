const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kathmandu';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33b44b0005msh050ba499c57f422p1eba62jsn2819c37a7768',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url,options)
	.then(response => response.json())
      .then(response => {
		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed		
		console.log(response)})
      .catch ((error) => console.error(error));