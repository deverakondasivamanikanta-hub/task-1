async function getWeather() {
    let city = document.getElementById("city").value;
    let api =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d3b04d71f2fea9e4e283eaefcadf882`;
    let response = await fetch(api);
    let data = await response.json();
   let temp = data.main.temp - 273.15;
   let weather = data.weather[0].main;
   let humidity = data.main.humidity;
   let wind = data.wind.speed;
   let icon = "";
if(weather=="Clear"){
    icon="☀️";
}
else if(weather=="Clouds"){
    icon="☁️";
}
else if(weather=="Rain"){
    icon="🌧️";
}
else if(weather=="Snow"){
    icon="❄️";
}
else{
    icon="🌤️";
}
document.getElementById("result").innerHTML = `
<h2>${icon} ${city}</h2>
<p><b>Temperature:</b> ${temp.toFixed(2)} °C</p>
<p><b>Weather:</b> ${weather}</p>
<p><b>Humidity:</b> ${humidity}%</p>
<p><b>Wind Speed:</b> ${wind} m/s</p>
`;
}
