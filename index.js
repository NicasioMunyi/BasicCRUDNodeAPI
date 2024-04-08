import express from "express";


const PORT = 6000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Wecome to My API");
})

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})
