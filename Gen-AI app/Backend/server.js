require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");
const {invokeGeminiAI} = require("./src/services/ai.service");

connectDB();
invokeGeminiAI("Hello Gemini! Explain what is interview ")

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});