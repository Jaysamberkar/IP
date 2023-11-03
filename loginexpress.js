const express = require('express');
const app = express();
const port = 3000; // You can change this port as needed

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // You can use any template engine you prefer

// Serve static files (e.g., CSS, JavaScript, images) from a 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('login'); // Render the login form
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Implement your authentication logic here
  if (username === 'your_username' && password === 'your_password') {
    // Successful login
    res.send('Login successful');
  } else {
    // Failed login
    res.send('Login failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
