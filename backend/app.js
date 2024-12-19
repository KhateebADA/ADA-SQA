const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// const mongoose = require('mongoose');

// const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000 with Mongo URI ${process.env.MONGO_URI}`);
});

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Database connected"))
//     .catch(err => console.error("Database connection error:", err));


console.log("JWT Secret:", JWT_SECRET);



