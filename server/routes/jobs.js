const express = require('express');
    const router = express.Router();
    const Job = require('../../database/models/Job');
    const verifyToken = require('../middleware/auth');

    // GET /jobs
    router.get('/', verifyToken, async (req, res) => {
      const { location, sector, keyword } = req.query;
      const filter = {};
      if (location) filter.location = location;
      if (sector) filter.sector = sector;
      if (keyword) {
        filter.$or = [
          { title: { $regex: keyword, $options: 'i' } },
          { description: { $regex: keyword, $options: 'i' } },
        ];
      }

      try {
        const jobs = await Job.find(filter).populate('organization');
        res.json(jobs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // POST /jobs
    router.post('/', verifyToken, async (req, res) => {
      const job = new Job(req.body);
      try {
        const newJob = await job.save();
        res.status(201).json(newJob);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // PUT /jobs/:id
    router.put('/:id', verifyToken, async (req, res) => {
      try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        Object.assign(job, req.body);
        const updatedJob = await job.save();
        res.json(updatedJob);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // DELETE /jobs/:id
    router.delete('/:id', verifyToken, async (req, res) => {
      try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        await job.remove();
        res.json({ message: 'Job deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    module.exports = router;
