// const express = require('express');
// const Chart = require('chart.js');

// const app = express();
// const port = 3000;



// // Route pour afficher la page avec le graphique
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/endpoint1.html');
// });
// app.get('/endpoint2', (req, res) => {
//     res.sendFile(__dirname + '/endpoint2.html');

// });

// // // API pour fournir les données

// const fetch = require('node-fetch').default;


// app.get('/api/data', async (req, res) => {
//   try {
//     const response = await fetch('https://airqino-api.magentalab.it/getCurrentValues/SMART188?accept=application/json');
//     const data = await response.json();
//     console.log(data)
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const SmoothieChart = require('smoothie');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/endpoint1.html');
});

app.get('/endpoint2', (req, res) => {
  res.sendFile(__dirname + '/endpoint2.html');
});

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch('https://airqino-api.magentalab.it/getCurrentValues/SMART188?accept=application/json');
    const data = await response.json();
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/data2', async (req, res) => {
  try {
    const response = await fetch('https://airqino-api.magentalab.it/getCurrentValues/SMART189?accept=application/json');
    const data = await response.json();
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/infoStation', async (req, res) => {
  try {
    const response = await fetch('https://airqino-api.magentalab.it/getSessionInfo/AQ54');
    const data = await response.json();
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// app.get('/api/infoStationLatLong', async (req, res) => {
//   try {
//     const response = await fetch('https://airqino-api.magentalab.it/getStations/AQ54');
//     const data = await response.json();
//     // console.log(data);
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
