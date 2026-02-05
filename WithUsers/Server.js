import express from "express";
import cors from "cors";
import fs from "fs/promises";

const app = express();

app.use(cors());
app.use(express.json());

// LOGIN ROUTE
app.post("/login", async (req, res) => {
  const { id, name } = req.body;

  try {
    const data = await fs.readFile("./user.json", "utf-8");
    const users = JSON.parse(data);

    const user = users.find(
      (u) => u.id === id && u.name === name
    );

    if (user) {
      return res.status(201).json({
        message: "Login successful",
        user
      });
    } else {
      return res.status(401).json({
        message: "Invalid ID or Name"
      });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
