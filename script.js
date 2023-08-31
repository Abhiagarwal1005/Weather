const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector('form');
const weather = document.querySelector('#weather');
const search = document.querySelector('#search');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    getWeather(search.value)
})

const getWeather = async (city) => {
    weather.innerHTML = `<div class="loader"></div>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2 style="text-align: center;">City Not Found</h2>`
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp}°C</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}