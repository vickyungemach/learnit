const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
const router = express.Router();


router.post('/register', async (req, res) => {
    const { name, password } = req.body;

    let user = await User.findOne({ name });

    if (user) {
        return res.status(400).json({ msg : 'User already exists!' });
    }

    user = new User({ name, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: {name: user.name, id: user.id} }

    jwt.sign(payload, 'Whitecat', (err, token) => {
        if(err) throw err;
        res.status(200).json({ token }); 
    });
})


router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    let user = await User.findOne({ name });

    if (!user) {
        return res.status(400).json({ msg: 'Username or password invalid!'});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ msg: 'Username or password invalid!'});
    }

    const payload = { user: {name: user.name, id: user._id} };

    jwt.sign(payload, 'Whitecat', (err, token) => {
        if(err) throw err;
        res.json({ token });
    })
})


router.get('/', protect, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');

    res.status(200).json(user);
})

module.exports = router;

