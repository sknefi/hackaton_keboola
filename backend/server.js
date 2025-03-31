const express = require('express');
const nodemailer = require('nodemailer');
const dbConnection = require('./services/dbConnection');

const app = express();
app.use(express.json());
dbConnection();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server beží na porte ${PORT}`);
});
