const express = require('express');
    const router = express.Router();
    const Organization = require('../../database/models/Organization');

    // GET /organizations
    router.get('/', async (req, res) => {
      try {
        const organizations = await Organization.find().populate('jobs');
        res.json(organizations);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // POST /organizations
    router.post('/', async (req, res) => {
      const organization = new Organization(req.body);
      try {
        const newOrganization = await organization.save();
        res.status(201).json(newOrganization);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // PUT /organizations/:id
    router.put('/:id', async (req, res) => {
      try {
        const organization = await Organization.findById(req.params.id);
        if (!organization) return res.status(404).json({ message: 'Organization not found' });

        Object.assign(organization, req.body);
        const updatedOrganization = await organization.save();
        res.json(updatedOrganization);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // DELETE /organizations/:id
    router.delete('/:id', async (req, res) => {
      try {
        const organization = await Organization.findById(req.params.id);
        if (!organization) return res.status(404).json({ message: 'Organization not found' });

        await organization.remove();
        res.json({ message: 'Organization deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    module.exports = router;
