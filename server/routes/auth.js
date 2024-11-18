const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const User = require('../../database/models/User');

    // POST /register
    router.post('/register', async (req, res) => {
      const { name, email, password } = req.body;

      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // POST /login
    router.post('/login', async (req, res) => {
      const { email, password } = req.body;

      try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

    module.exports = router;
