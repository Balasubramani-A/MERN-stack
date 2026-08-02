require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");
const { generateInterviewReport } = require("./src/services/ai.service");
const {jobDescription, resume, selfDescription} = require("./src/services/temp");

connectDB();

async function runTest() {
  try {
    await generateInterviewReport(jobDescription, resume, selfDescription);
  } catch (err) {
    console.error("Report Generation Error:", err);
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});