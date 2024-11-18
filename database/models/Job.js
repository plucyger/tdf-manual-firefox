const mongoose = require('mongoose');

    const JobSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
        required: true,
      },
      deadline: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      sector: {
        type: String,
        required: true,
      },
    });

    module.exports = mongoose.model('Job', JobSchema);
