
// const inputBox = document.querySelector('.input-box');
// const searchBtn = document.getElementById('searchBtn');
// const weather_img = document.querySelector('.weather-img');
// const temperature = document.querySelector('.temperature');
// const description = document.querySelector('.description');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind-speed');

// // const location_not_found = document.querySelector('.location-not-found');

// // const weather_body = document.querySelector('.weather-body');

// async function checkWeather(city){
//     const api_key = "6428492a802f85f740fe92cd087e719a";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response => response.json());
//     console.log(weather_data);

//     if(weather_data.cod==='404'){
//         console.log("error");
//         return;
//     }

//     temperature.innerHTML=`${Math.round  
//      (weather_data.main.temp - 273.15)}°C` ;
//      description.innerHTML = '${weather_data.weather[0].description}';
//      humidity.innerHTML = '${weather_data.main.humoidity}%';
//      wind_speed.innerHTML = '${weather_data.wind.speed}km/h';
     

//      switch(weather_data.weather[0].main){
//         case'clouds':
//             weather_img.src ="image/cloud.png";
//             break;
//         case'clear':
//             weather_img.src ="image/clear.png";
//             break;
//              case'Rain':
//             weather_img.src ="image/Rain.png";
//             break;
//              case'Mist':
//             weather_img.src ="image/Mist.png";
//             break;
//              case'Snow':
//             weather_img.src ="image/Snow.png";
//      }

// }

// searchBtn.addEventListener('click',()=>{
//     checkWeather(inputBox.value);
// });

window.onload = function() {
    const inputBox = document.querySelector('.input-box');
    const searchBtn = document.getElementById('searchBtn');
    const weather_img = document.querySelector('.weather_img');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.getElementById('humidity');
    const wind_speed = document.getElementById('wind-speed');

    async function checkWeather(city) {
        const api_key = "6428492a802f85f740fe92cd087e719a";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        try {
            const weather_data = await fetch(url).then(response => response.json());
            console.log(weather_data);

            // Check if city is not found
            if (weather_data.cod === '404') {
                console.log("City not found");
                return;
            }

            // Update temperature, description, humidity, and wind speed
            temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
            description.innerHTML = `${weather_data.weather[0].description}`;
            humidity.innerHTML = `${weather_data.main.humidity}%`;  // Fixed typo here (humidity)
            wind_speed.innerHTML = `${weather_data.wind.speed} km/h`;

            // Change weather image based on condition
            console.log(weather_data.weather[0].main)
            switch (weather_data.weather[0].main) {
                case 'Clouds':
                    weather_img.src = "./image/cloud.png";
                    break;
                case 'Clear':
                    weather_img.src = "./image/clear.png";
                    break;
                case 'Rain':
                    weather_img.src = "./image/rain.png";
                    break;
                case 'Mist':
                    weather_img.src = "./image/mist.png";
                    break;
                case 'Snow':
                    weather_img.src = "./image/snow.png";
                    break;
                default:
                    weather_img.src = "./image/snow.png";  
                    break;
            }
        } catch (error) {
            console.log('Error fetching weather data:', error);
        }
    }

    // Add event listener for search button
    // console.log(weather_data.weather[0].main)
    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    });
};
