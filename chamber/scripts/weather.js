const apiKey = "732c24781e3c81496692746a89e2d772";
const cityID = "4438121";
const base = "https://api.openweathermap.org/data/2.5/";

async function loadWeather() {
  const [currRes, fcRes] = await Promise.all([
    fetch(`${base}weather?id=${cityID}&units=imperial&appid=${apiKey}`),
    fetch(`${base}forecast?id=${cityID}&units=imperial&appid=${apiKey}`)
  ]);

  const curr = await currRes.json();
  const fc = await fcRes.json();

  const temp = curr.main.temp.toFixed(0);
  const desc = curr.weather[0].description;
  const forecasts = fc.list
    .filter(o => o.dt_txt.includes("12:00:00"))
    .slice(0, 3)
    .map(o => ({
      date: new Date(o.dt_txt).toLocaleDateString(),
      temp: o.main.temp.toFixed(0)
    }));

  const container = document.getElementById("weather-container");
  container.innerHTML = `
    <p>Current: ${temp}°F – ${desc}</p>
    <h3>3-Day Forecast</h3>
    <ul>
      ${forecasts.map(f =>
        `<li>${f.date}: ${f.temp}°F</li>`
      ).join('')}
    </ul>`;
}

loadWeather();
