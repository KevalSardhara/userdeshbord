function show_user_info() {
  let i = parseInt(sessionStorage.getItem("id"));
  let session = sessionStorage.getItem("status");

  console.log(i);
  if (session === "true") {
    console.log(i);
    let userObj = JSON.parse(localStorage.getItem("userData"));
    console.log(userObj);
    document.getElementById("duname").innerText = userObj[i].uname;
    document.getElementById("dgender").innerText = userObj[i].gender;
    document.getElementById("dbirthdate").innerText = userObj[i].birthdate;
    document.getElementById("dmNo").innerText = userObj[i].mo_number;
    document.getElementById("demail").innerText = userObj[i].emailId;
  } else {
    document.getElementById("container").innerHTML = `<div>
        <span>
          No data found plaese <a href="./login.php">login now</a>
        </span>
      </div>`;
  }
}
show_user_info();

function log_out() {
  sessionStorage.clear();
  sessionStorage.setItem("status", "false");
  window.open("login.php", "_self");
  return true;
}

function cancle() {
  sessionStorage.clear();
  sessionStorage.setItem("status", "false");
  show_user_info();
  return true;
}

// function demoDisplay() {
//   document.getElementById("display").style.display = "none";
// }
// demoDisplay();

// function demoVisibility() {
//     document.getElementById("display").style.display = "inline";
//   }
//   demoVisibility();

function update_record() {
  window.open("update.php", "_self");
  return true;
}

let midian = "AM";

function show_date() {
  let time = document.getElementById("time");
  let date = new Date();
  const h = "" + date.getHours();
  const m = "" + date.getMinutes();
  const s = "" + date.getSeconds();

  console.log(s.length);
  if (h === "0" && m === "0" && s === "0") {
    midian = midian === "PM" ? "AM" : "PM";
  } else {
    midian = midian === "PM" ? "PM" : "AM";
  }

  time.innerHTML =
    (h.length === 2 ? h : "0" + h) +
    " : " +
    (m.length === 2 ? m : "0" + m) +
    " : " +
    (s.length === 2 ? s : "0" + s) +
    "   " +
    midian;
}

// https://jsonplaceholder.typicode.com/photos

setInterval(() => {
  show_date();
}, 1000);

async function gif_call() {
  let api = await fetch(
    "https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=80"
  );
  let jsonapi = await api.json();
  return jsonapi;
}
gif_call()
  .then((obj) => {
    return obj;
  })
  .then((obj) => {
    let arrobj = obj["results"];
    // arrobj = JSON.stringify(arrobj);
    // arrobj = JSON.parse(arrobj);
    console.log(arrobj);

    for (let i = 0; i < arrobj.length; i++) {
      setTimeout(() => {
        document.getElementById("img").src =
          arrobj[i]["media"][0]["gif"]["url"];
      }, i * 2 * 1000);
    }
  });

console.log("api first to call the data...!");

// -------------------------------------------------------------------------- //
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a3af82d6b5msh7b328bea802a565p156044jsn6b39315621d6",
//     "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// -------------------------------------------------------------------------- //

// const tempElement = document.getElementById("temperature");
// const descElement = document.getElementById("description");
// const locationElement = document.getElementById("location");

// const weather = {};

// weather.temperature = {
//     unit : "celsius"
// }

// const KELVIN = 273;

// const key = "82005d27a116c2880c8f0fcb866998a0";

// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// function setPosition(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;

//     getWeather(latitude, longitude);
// }

// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }

// function getWeather(latitude, longitude){
//     let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

//     fetch(api)
//         .then(function(response){
//             let data = response.json();
//             return data;
//         })
//         .then(function(data){
//             weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//             weather.description = data.weather[0].description;
//             weather.iconId = data.weather[0].icon;
//             weather.city = data.name;
//             weather.country = data.sys.country;
//         })
//         .then(function(){
//             displayWeather();
//         });
// }

// function displayWeather(){
//     tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//     descElement.innerHTML = weather.description;
//     locationElement.innerHTML = `${weather.city}, ${weather.country}`;
// }

// function celsiusToFahrenheit(temperature){
//     return (temperature * 9/5) + 32;
// }

// function apiCall(){
//     if(weather.temperature.value === undefined) return;

//     if(weather.temperature.unit == "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);

//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }else{
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// };

// apiCall();

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();

//     xmlHttp.onreadystatechange = function()
//     {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//         {
//             callback(xmlHttp.responseText);
//         }
//     }
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
// }

// function tenorCallback_search(responsetext)
// {
//     var response_objects = JSON.parse(responsetext);
//     json = response_objects["results"];

//     document.getElementById("myImg").src = json[0]["media"][0]["nanogif"]["url"];
//     let count=1;
//     setInterval(() => {
//         document.getElementById("myImg").src = json[count]["media"][0]["nanogif"]["url"];
//         count++;
//     }, 120000);
// }

// function grab_data()
// {
//     var search_url = "https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=80";
//     httpGetAsync(search_url,tenorCallback_search);
// }
// grab_data();



function find_wheater(){

  
  navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let weatherApi = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

  url =weatherApi + "?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

  console.log(url);
  fetch(url) //api for the get request
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("temperature").innerHTML =
        data.main.temp + "f°";
      // document.getElementById("icon").src = data.weather[0].icon + "png";
      // document.getElementById("location").innerHTML =
      //   data.name + "</br>let : " + lat + "° </br> log : " + lon + "°";
      document.getElementById("location").innerHTML = data.name;
      document.getElementById("description").innerHTML = data.weather[0].main;
    });
});  
}


find_wheater();