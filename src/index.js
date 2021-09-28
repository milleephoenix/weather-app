let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Display day and time in JS.
let now = new Date();
let day = weekDay[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let hoursAsString = hour < 10 ? "0" + hour : hour;
let minutesAsString = minute < 10 ? "0" + minute : minute;

let dayTime = document.querySelector("h3");
dayTime.innerHTML = `${day} ${hour}:${minutesAsString}`;

//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
let cityInput = document.querySelector("#city-input");
let apiKey = "339446a70a6285d4da506a17e7465ddf";
let unit = "metric";

function getTemperature(response) {
  let data = response.data;
  let temperature = Math.round(data.main.temp);
  let humidity = data.main.humidity;
  let windSpeed = data.wind.speed;

  let actualHumidity = document.querySelector("#humidity");
  let actualTemp = document.querySelector("#actual-temp");
  let actualSpeed = document.querySelector("#wind");
  actualTemp.innerHTML = `${temperature}°C`;
  actualHumidity.innerHTML = `${humidity} %`;
  actualSpeed.innerHTML = `${windSpeed} km/h`;
}

function citySearch(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${unit}`;
  axios.get(`${apiUrl}&appId=${apiKey}`).then(getTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", citySearch);
