// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeather(city) {
try {
    let apikey = `${apikey}`;

    let raw = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );

    if (!raw.ok) {  ``
    throw new Error("City not found, Something went wrong");
    }
    let real = await raw.json();
    console.log(real);
} catch (err) {
    console.log(err.message);
}
}

getWeather("pune");
