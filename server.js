const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running!");
  });

  app.get("/api/status", (req, res) => {
    res.json({
        status: "online",
            message: "Hello from DOWNLOAD PANNIKO!"
              });
              });

              const PORT = process.env.PORT || 3000;

              app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
                });