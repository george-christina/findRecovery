require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors= require('cors');

app.use(cors(),express.json(),express.urlencoded({extended:true}));

require('./server/config/database.config');
require('./server/routes/meeting.route')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );