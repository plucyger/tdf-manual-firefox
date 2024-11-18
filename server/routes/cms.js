const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const Job = require('../../database/models/Job');
    const Organization = require('../../database/models/Organization');
    const Grant = require('../../database/models/Grant');
    const Tender = require('../../database/models/Tender');
    const Expert = require('../../database/models/Expert');
    const Blog = require('../../database/models/Blog');
    const verifyToken = require('../middleware/auth');

    // POST /cms/register
    router.post('/register', async (req, res) => {
      const { name, email, password } = req.body;

      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role: 'admin' });
        await user.save();
        res.status(201).json({ message: 'Admin registered successfully' });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // POST /cms/login
    router.post('/login', async (req, res) => {
      const { email, password } = req.body;

      try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CMS Routes for Jobs
    router.get('/jobs', verifyToken, async (req, res) => {
      try {
        const jobs = await Job.find().populate('organization');
        res.json(jobs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    router.post('/jobs', verifyToken, async (req, res) => {
      const job = new Job(req.body);
      try {
        const newJob = await job.save();
        res.status(201).json(newJob);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.put('/jobs/:id', verifyToken, async (req, res) => {
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

    router.delete('/jobs/:id', verifyToken, async (req, res) => {
      try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });

        await job.remove();
        res.json({ message: 'Job deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CMS Routes for Organizations
    router.get('/organizations', verifyToken, async (req, res) => {
      try {
        const organizations = await Organization.find().populate('jobs');
        res.json(organizations);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    router.post('/organizations', verifyToken, async (req, res) => {
      const organization = new Organization(req.body);
      try {
        const newOrganization = await organization.save();
        res.status(201).json(newOrganization);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.put('/organizations/:id', verifyToken, async (req, res) => {
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

    router.delete('/organizations/:id', verifyToken, async (req, res) => {
      try {
        const organization = await Organization.findById(req.params.id);
        if (!organization) return res.status(404).json({ message: 'Organization not found' });

        await organization.remove();
        res.json({ message: 'Organization deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CMS Routes for Grants
    router.get('/grants', verifyToken, async (req, res) => {
      try {
        const grants = await Grant.find();
        res.json(grants);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    router.post('/grants', verifyToken, async (req, res) => {
      const grant = new Grant(req.body);
      try {
        const newGrant = await grant.save();
        res.status(201).json(newGrant);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.put('/grants/:id', verifyToken, async (req, res) => {
      try {
        const grant = await Grant.findById(req.params.id);
        if (!grant) return res.status(404).json({ message: 'Grant not found' });

        Object.assign(grant, req.body);
        const updatedGrant = await grant.save();
        res.json(updatedGrant);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.delete('/grants/:id', verifyToken, async (req, res) => {
      try {
        const grant = await Grant.findById(req.params.id);
        if (!grant) return res.status(404).json({ message: 'Grant not found' });

        await grant.remove();
        res.json({ message: 'Grant deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CMS Routes for Tenders
    router.get('/tenders', verifyToken, async (req, res) => {
      try {
        const tenders = await Tender.find();
        res.json(tenders);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    router.post('/tenders', verifyToken, async (req, res) => {
      const tender = new Tender(req.body);
      try {
        const newTender = await tender.save();
        res.status(201).json(newTender);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.put('/tenders/:id', verifyToken, async (req, res) => {
      try {
        const tender = await Tender.findById(req.params.id);
        if (!tender) return res.status(404).json({ message: 'Tender not found' });

        Object.assign(tender, req.body);
        const updatedTender = await tender.save();
        res.json(updatedTender);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.delete('/tenders/:id', verifyToken, async (req, res) => {
      try {
        const tender = await Tender.findById(req.params.id);
        if (!tender) return res.status(404).json({ message: 'Tender not found' });

        await tender.remove();
        res.json({ message: 'Tender deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CMS Routes for Experts
    router.get('/experts', verifyToken, async (req, res) => {
      try {
        const experts = await Expert.find();
        res.json(experts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    router.post('/experts', verifyToken, async (req, res) => {
      const expert = new Expert(req.body);
      try {
        const newExpert = await expert.save();
        res.status(201).json(newExpert);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.put('/experts/:id', verifyToken, async (req, res) => {
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

    router.delete('/experts/:id', verifyToken, async (req, res) => {
      try {
        const expert = await Expert.findById(req.params.id);
        if (!expert) return res.status(404).json({ message: 'Expert not found' });

        await expert.remove();
        res.json({ message: 'Expert deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    // CMS Routes for Blogs
    router.get('/blogs', verifyToken, async (req, res) => {
      try {
        const blogs = await Blog.find();
        res.json(blogs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    router.post('/blogs', verifyToken, async (req, res) => {
      const blog = new Blog(req.body);
      try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.put('/blogs/:id', verifyToken, async (req, res) => {
      try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        Object.assign(blog, req.body);
        const updatedBlog = await blog.save();
        res.json(updatedBlog);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.delete('/blogs/:id', verifyToken, async (req, res) => {
      try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        await blog.remove();
        res.json({ message: 'Blog deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    module.exports = router;
