// setup required packages and routes
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// port setup for local and remote
const PORT = process.env.PORT || 3001;
const app = express();

// setup express methods
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listens for set port
app.listen(PORT, () => {
    console.log(`API server is a go. Port ${PORT}!`);
  });