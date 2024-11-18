const mongoose = require('mongoose');

    const OrganizationSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['Public', 'Private', 'Non-profit'],
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
      }],
    });

    module.exports = mongoose.model('Organization', OrganizationSchema);
