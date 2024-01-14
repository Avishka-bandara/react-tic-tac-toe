// tic-tac-toe-backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory user data (replace this with a database in a real application)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulate user authentication (replace with actual authentication logic)
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Here, you would typically generate and send an authentication token
  const authToken = 'your_generated_token';

  res.json({ message: 'Login successful', token: authToken });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
