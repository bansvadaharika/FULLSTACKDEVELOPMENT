async function getWeather() {
  const apiKey = 'YOUR_API_KEY'; 
  const city = document.getElementById('cityInput').value.trim();

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather is cool.");
    

    const rawText = await res.text();

    const card = document.getElementById('weatherCard');
    card.innerHTML = `
      <h2>Raw API Response:</h2>
      <pre style="text-align:left; font-size:14px;">${rawText}</pre>
    `;
    card.classList.remove('hidden');
  } catch (err) {
    alert(err.message);
  }
}
