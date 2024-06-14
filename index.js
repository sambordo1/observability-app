import express from 'express';

const app = express();

// Explicitly specify IPv4 address (0.0.0.0) to listen on
app.listen(4000, '0.0.0.0', () => {
    console.log("Server listening on port 4000");
});

app.get('/', (req, res) => {
    res.json('Hello from Observability app-server');
});

app.get('/api/one', (req, res) => {
    res.json('Hello from Observability app-server API ONE');
});

app.get('/api/two', (req, res) => {
    res.json('Hello from Observability app-server API TWO');
});

app.get('/api/three', (req, res) => {
    res.json('Hello from Observability app-server API THREE');
});

app.get('/api/four', (req, res) => {
    const multiplier = req.query.multiplier;

    let responseData = {};

    if (multiplier) {
        number = parseInt(multiplier);
        responseData = {
            result: number * 4
        };
    } else {
        responseData = {
            error: "Multiplier parameter is missing or invalid"
        };
    }

    res.json(responseData);
});