function displayResult() {
    var city = document.getElementById("city").value;
    var apiKey = "48800eeac216780dba8e12ad72c4d161";

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric')
        .then(response => response.json())
        .then(data => {
            var t = data.main.temp;
            var x = data.main.temp_max;
            var y = data.main.temp_min;

            document.getElementById("output").innerHTML = t + " °C";
            document.getElementById("output2").innerHTML = x + " °C";
            document.getElementById("output3").innerHTML = y + " °C";

            // Change background image based on weather condition
            var weatherCondition = data.weather[0].main.toLowerCase();
            changeBackground(weatherCondition);
        })
        .catch(error => {
            alert("City not found. Please enter a valid city name.");
            console.error("Error fetching weather data:", error);
        });
}

function changeBackground(weatherCondition) {
    var body = document.body;
    var backgroundImage;

    switch (weatherCondition) {
        case 'clear':
            backgroundImage = 'clear.jpg';
            break;
        case 'clouds':
            backgroundImage = 'cloudy.jpg';
            break;
        case 'rain':
            backgroundImage = 'rainy.jpg';
            break;
        case 'snow':
            backgroundImage = 'snow.jpg';
            break;
        default:
            backgroundImage = 'default-background.jpg';
    }

    body.style.backgroundImage = `url('${backgroundImage}')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
}
