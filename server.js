require("dotenv");
const express = require("express");
const dataRoutes = require("./routes/dataRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());


app.use("/api/data", dataRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Not found" })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})