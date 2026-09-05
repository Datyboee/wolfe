const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot-Wolfe is running 24/7!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Hapa ndipo unaweza kuweka kodi zako za asili za bot yako baadaye
console.log("Bot safi tayari!");
