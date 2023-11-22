// server.js
import express from "express";
import { connect, Schema, model } from "mongoose";
import pkg from "body-parser";
import cors from "cors";
const { json } = pkg;

const app = express();
const PORT = process.env.PORT || 27017;

app.use(cors());
app.use(json());

// Connect to MongoDB
connect("mongodb://localhost:27017/feedbackdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const feedbackSchema = new Schema({
  email: String,
  subject: String,
  message: String,
});

const FeedbackModel = model("feedbacks", feedbackSchema);

app.post("/feedbackdb", async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    const feedback = new FeedbackModel({ email, subject, message });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ..
