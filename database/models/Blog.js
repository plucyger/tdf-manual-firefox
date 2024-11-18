const mongoose = require('mongoose');

    const BlogSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      publishDate: {
        type: Date,
        default: Date.now,
      },
      tags: [{
        type: String,
      }],
      status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
      },
    });

    module.exports = mongoose.model('Blog', BlogSchema);
