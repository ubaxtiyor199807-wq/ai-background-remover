import express from "express";
import multer from "multer";
import cors from "cors";
import { removeBackground } from "./removeBg.js";

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/remove-bg", upload.single("image"), async (req, res) => {
    try {
        const result = await removeBackground(req.file.buffer);
        res.set("Content-Type", "image/png");
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: "AI error", details: error.toString() });
    }
});

app.get("/", (req, res) => {
    res.send("AI Background Remover API Working");
});

app.listen(3000, () => console.log("Server running on port 3000"));
