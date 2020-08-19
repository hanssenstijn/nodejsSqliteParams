const express = require('express');

// Routes
const mainRoutes = require('./routes/main');

// Create Express app
const app = express();
const port = 3000;

// Linking routes
app.use('/api', mainRoutes);

// Handle errors
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).send({ error: err });
});

// Run app
app.listen(port, () => console.log(`API running in at http://localhost:${port}`));

module.exports = app;
