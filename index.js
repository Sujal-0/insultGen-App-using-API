import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL ="https://evilinsult.com/generate_insult.php?lang=en&type=json";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            insult: result.data.insult,
        });
    } catch (error) {
        res.status(500);
    }
});



app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});




