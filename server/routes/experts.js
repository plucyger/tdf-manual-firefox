const express = require('express');
    const router = express.Router();
    const Expert = require('../../database/models/Expert');

    // GET /experts
    router.get('/', async (req, res) => {
      try {
        const experts = await Expert.find();
        res.json(experts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // POST /experts
    router.post('/', async (req, res) => {
      const expert = new Expert(req.body);
      try {
        const newExpert = await expert.save();
        res.status(201).json(newExpert);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // PUT /experts/:id
    router.put('/:id', async (req, res) => {
      try {
        const expert = await Expert.findById(req.params.id);
        if (!expert) return res.status(404).json({ message: 'Expert not found' });

        Object.assign(expert, req.body);
        const updatedExpert = await expert.save();
        res.json(updatedExpert);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // DELETE /experts/:id
    router.delete('/:id', async (req, res) => {
      try {
        const expert = await Expert.findById(req.params.id);
        if (!expert) return res.status(404).json({ message: 'Expert not found' });

        await expert.remove();
        res.json({ message: 'Expert deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    module.exports = router;
