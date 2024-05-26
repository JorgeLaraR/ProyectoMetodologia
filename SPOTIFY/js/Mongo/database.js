// database.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/perfil', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({
  name: String,
  bio: String,
  profileImage: String,
  // Otros campos
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
