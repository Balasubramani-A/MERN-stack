const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function invokeGeminiAI(inputText) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: inputText,
    });
    console.log("Gemini AI Response:", response.text);
  } catch (error) {
    console.error("Error invoking Gemini AI:", error);
  }
}

module.exports = { invokeGeminiAI };