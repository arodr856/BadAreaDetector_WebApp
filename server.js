const express = require('express');
const policecallsRoutes = require('./routes/policecalls');
const app = express();


app.use('/api/policecalls', policecallsRoutes);
app.get('/testroute', (req, res) => {
    res.json('Hello world');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}. . .`);
})