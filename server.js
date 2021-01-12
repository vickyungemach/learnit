const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const CryptoJS = require('crypto-js');

const app = express();
const PORT =  5000;

connectDB();

app.use(express.json());

// Enable CORS
app.use(cors());


// Mount routers
app.use('/api/words', require('./routes/words'));
app.use('/api/lists', require('./routes/lists'));
app.use('/api/user', require('./routes/auth'));


// Set react as static folder
app.use(express.static('client/build'));
app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); 


app.listen(PORT, console.log('Server running on ' + PORT));



// Encrypt
const ciphertext = CryptoJS.AES.encrypt('encrypt this please', 'whitecat').toString();

// Decrypt
const bytes  = CryptoJS.AES.decrypt(ciphertext, 'whitecat');
const originalText = bytes.toString(CryptoJS.enc.Utf8);
