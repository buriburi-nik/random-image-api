const express = require('express');
const axios = require('axios');

//  Express app banaya
const app = express();

//  Server kis port pe chalega (yaha 3000 hai)
const PORT = 3000;

// andom image ke liye API endpoint banaya
app.get('/api/image/random', async (req, res) => {
  try {
    //  Lorem Picsum ka use kar rahe hain random image ke liye
    const width = 400;  // Image ki width
    const height = 300; // Image ki height

    //  Random image URL generate kar rahe hain, taaki har baar nayi image mile
    const randomImageUrl = `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;

    //  JSON response me success status aur image URL bhej rahe hain
    res.json({
      success: true,
      imageUrl: randomImageUrl,
    });
  } catch (error) {
    //  Agar koi error aata hai, to user ko error message ke sath response bhejte hain
    res.status(500).json({
      success: false,
      message: 'Failed to fetch random image',
    });
  }
});

//  Server ko run kar rahe hain aur console me message dikha rahe hain
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
