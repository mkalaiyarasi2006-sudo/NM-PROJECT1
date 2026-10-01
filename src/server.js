const path = require('path');
require('dotenv').config({ path: path.join(process.cwd(), '.env') });

console.log("ENV path check:", path.join(process.cwd(), '.env'));
console.log("MONGODB_URI:", !!process.env.MONGODB_URI);

const app = require('./app');
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 5003;

const server = app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});