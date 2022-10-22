// Variable for api key
let weatherData, userInput;

const apiKey = "dbaa4026eedc8fee40c09bb56ccc0d4d"

// variable for base url

const baseURL = "https://api.openweathermap.org/data/2.5/weather"

const $weatherFor = $("#weather-for");
const $temp = $("#temp");
const $feelsLike = $("#feels-like");
const $weather = $("#weather");
const $input = $('input[type ="text"]')


// function that does movie search
function getData(event){

    $.ajax({
        url : `${baseURL}?q=${event}&appid=${apiKey}&units=imperial`,
    }).then(
        (data) => {
            weatherData = data;
            render(); 
        },
        (error) => {
            console.log('bad request', error);
        }
    );
    
}


function render() {
    $weatherFor.text(`Weather For: ` + userInput);
    $temp.text(`Temperature: ` + weatherData.main.temp + "°");
    $feelsLike.text(`Feels Like: ` + weatherData.main.feels_like + "°");
    $weather.text(`Weather: ` + weatherData.weather[0].description);
}

$("input[type=submit]").on("click", (event) => {

    event.preventDefault();

    userInput = $input.val();

    $cityInput = $('#search');

    $cityInput.val(' ')

    getData(userInput)
})