require('dotenv').config();
const express = require('express');
const dbConnection = require('./services/dbConnection');

const app = express();
app.use(express.json());
dbConnection();


const userController = require('./controllers/user.controller');
const authController = require('./controllers/auth.controller');

app.use('/user', userController);
app.use('/auth', authController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🥳🎉 Server beží na porte ${PORT}`);
});
