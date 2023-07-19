const bcrypt = require('bcrypt');
const UserAdd = require('../models/useraddModel');

// POST /users
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log('Received data:', username, email, password);

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password:', hashedPassword);

    // Create a new user instance
    const newUser = new UserAdd({ username, email, password: hashedPassword });
    console.log('New user object:', newUser);
    // Save the user to the database
    await newUser.save();
    console.log('User saved successfully');
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};
