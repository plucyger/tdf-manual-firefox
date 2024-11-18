const express = require('express');
    const mongoose = require('mongoose');
    const jobsRouter = require('./routes/jobs');
    const organizationsRouter = require('./routes/organizations');
    const expertsRouter = require('./routes/experts');
    const authRouter = require('./routes/auth');
    const cmsRouter = require('./routes/cms');
    const app = express();
    const port = process.env.PORT || 5000;

    mongoose.connect('mongodb://localhost:27017/tdf-mvp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.use(express.json());
    app.use('/jobs', jobsRouter);
    app.use('/organizations', organizationsRouter);
    app.use('/experts', expertsRouter);
    app.use('/auth', authRouter);
    app.use('/cms', cmsRouter);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
