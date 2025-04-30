require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/dbConnect');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Agregar esta ruta raíz
app.get('/', (req, res) => {
  res.send('¡API funcionando correctamente desde Render!');
});

connectToDB();

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
