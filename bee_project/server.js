const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');

const app = express();


app.use(bodyParser.json());
app.use('/api', movieRoutes);

app.listen(3000, (res,req) => {
  console.log(`Server is running on http://localhost:3000`);
});
