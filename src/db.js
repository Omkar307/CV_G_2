const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/cv_generator_db';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.log(`Error connecting to MongoDB: ${error}`);
});

module.exports = mongoose;
