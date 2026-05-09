const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../client')));

// Routes
const authRoutes = require('./routes/auth.routes');
const kycRoutes = require('./routes/kyc.routes');
const accountRoutes = require('./routes/account.routes');

app.use('/api/auth', authRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/account', accountRoutes);

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ATM-Simulation server running on port ${PORT}`);
});

module.exports = app;
