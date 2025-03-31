require('dotenv').config();
const express = require('express');
const dbConnection = require('./services/dbConnection');

const app = express();
app.use(express.json());
dbConnection();


const userController = require('./controllers/user.controller');
const authController = require('./controllers/auth.controller');
const newsletterController = require('./controllers/newsletter.controller');

app.use('/user', userController);
app.use('/auth', authController);
app.use('/newsletter', newsletterController);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`🥳🎉 Server beží na porte ${PORT}`);
});
