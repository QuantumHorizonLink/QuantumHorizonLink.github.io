const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

app.use(express.json()); // Parse JSON bodies

// Define a route to handle Discord bot requests
app.post('/discord', (req, res) => {
    const { url, value } = req.body;
    // Process the request (e.g., send data to Roblox script)
    res.status(200).send('Data received from Discord bot');
});

// Define a route to handle Roblox script requests
app.post('/roblox', (req, res) => {
    const { url, value } = req.body;
    // Process the request (e.g., ban user on Roblox)
    res.status(200).send('Data received from Roblox script');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
