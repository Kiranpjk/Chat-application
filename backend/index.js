const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios module

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/', // Corrected URL
            { username: username, secret: username, first_name: username },
            { headers: { 'private-key': '800c47a8-f5b0-43af-8321-0d4d2e9e0760' } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
