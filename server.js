const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')


const connectDB = require('./db');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
connectDB();

app.use(bodyParser.json())

// Routes
app.use('/sessions', require('./routes/sessions')); 
app.use('/session', require('./routes/session')); 



// Init port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});




