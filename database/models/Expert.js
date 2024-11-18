const mongoose = require('mongoose');

    const ExpertSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      experience: {
        type: String,
        required: true,
      },
      sectors: [{
        type: String,
        required: true,
      }],
    });

    module.exports = mongoose.model('Expert', ExpertSchema);
