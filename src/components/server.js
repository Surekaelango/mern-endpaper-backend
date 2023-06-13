const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// API endpoint to fetch weather data
app.get('/weather', async (req, res) => {
  const { location } = req.query;
  const apiKey = '399d27e7ee968dac16d9f37e2cc16047'; // Replace with your weather API key

  try {
    const response = await axios.get(
      
      `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    );
    const { name, temp_c, condition } = response.data.current;
    const weatherData = {
      location: name,
      temperature: temp_c,
      condition: condition.text,
    };
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
