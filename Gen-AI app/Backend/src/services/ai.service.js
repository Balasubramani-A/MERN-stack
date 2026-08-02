const { GoogleGenAI } = require("@google/genai");
const {z} = require("zod");
const {zodToJsonSchema} = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z.number().min(0).max(100),
  technicalQuestions: z.array(z.object({
    question: z.string().describe("The technical question can be asked in the interview"),
    intention: z.string().describe("The intention behind the technical question"),
    answer: z.string().describe("How to answer the technical question, what points to cover, structure of the answer, and what to avoid"),
  })).describe("A list of technical questions that can be asked in the interview, along with their intention and how to answer them"),
  behavioralQuestions: z.array(z.object({
    question: z.string().describe("The behavioral question can be asked in the interview"),
    intention: z.string().describe("The intention behind the behavioral question"),
    answer: z.string().describe("How to answer the behavioral question, what points to cover, structure of the answer, and what to avoid"),
  })).describe("A list of behavioral questions that can be asked in the interview, along with their intention and how to answer them"),
  skillGaps: z.array(z.object({
    skill: z.string().describe("The skill that the candidate is lacking or needs improvement"),
    severity: z.enum(['low', 'medium', 'high']).describe("The severity of the skill gap, indicating how critical it is for the role"),
  })).describe("A list of skill gaps identified in the candidate's profile"),
  preparationPlan: z.array(z.string()).describe("A list of steps the candidate can take to prepare for the interview"),
});

async function generateInterviewReport(jobDescription, resume, selfDescription) {

  prompt = `
  Generate and interview report for the candidate based on the following information:
  Job Description: ${jobDescription}
  Resume: ${resume}
  Self Description: ${selfDescription}
  `;
  const response = await ai.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseJsonSchema: zodToJsonSchema(interviewReportSchema),
    },
  });
  console.log(`ai response: ${JSON.parse(response.text)}`);
}

module.exports = { generateInterviewReport };