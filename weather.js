const API = "f41eb5c7db1da7dad304dc120a706709";
const weatherConsole = document.querySelector("#jsWeather span");

function onGeoSuccess(coordinates) {
  console.log(coordinates);
  const latitude = coordinates.coords.latitude;
  const longitude = coordinates.coords.longitude;
  console.log(`You live in ${latitude}, ${longitude}`);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  console.log(url);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      weatherConsole.innerText = `${temp}°C and ${weather} at ${city}`;
    })
  );
}

function onGeoError() {
  alert("Cannot find the location. Please check your location.");
  weatherConsole.innerText = "Cannot load weather info.";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
