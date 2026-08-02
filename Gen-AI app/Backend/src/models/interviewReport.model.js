const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * - Job description schema: string
 * - Resume text schema: string
 * - Self description schema: string
 * 
 * - matchScore: number
 * - Technical questions : [{
 *   question: String,
 *   intention: String,
 *   answer: String,
 * }]
 * - Behavioural questions: [{
 *   question: String,
 *   intention: String,
 *   answer: String,
 * }]
 * - Skill gaps: [{
 *   skill: String,
 *   severity: {
 *    type: String,
 *   enum: ['low', 'medium', 'high']
 *  },
 * }]
 * - Preparation plan: [{
 *   day: Number,
 *   focus: String,
 *   tasks: [String]
 * }]
 */

const technicalQuestionsSchema = new Schema({
  question: {
    type: String,
    required: [true, "Technical question is required"],
  },
  intention: {
    type: String,
    required: [true, "Intention is required"],
  },
  answer: {
    type: String,
    required: [true, "Answer is required"],
  }
},{
    _id: false
});

const behaviouralQuestionsSchema = new Schema({
  question: {
    type: String,
    required: [true, "Behavioural question is required"],
  },
  intention: {
    type: String,
    required: [true, "Intention is required"],
  },
  answer: {
    type: String,
    required: [true, "Answer is required"],
  }
},{
    _id: false
});

const skillGapsSchema = new Schema({
  skill: {
    type: String,
    required: [true, "Skill is required"],
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: [true, "Severity is required"],
  }
},{
    _id: false
});

const preparationPlanSchema = new Schema({
  day: {
    type: Number,
    required: [true, "Day is required"],
  },
  focus: {
    type: String,
    required: [true, "Focus is required"],
  },
  tasks: {
    type: [String],
    required: [true, "Tasks are required"],
  }
},{
    _id: false
});

const interviewReportSchema = new Schema({
  jobDescription: {
    type: String,
  },
  resumeText: {
    type: String,
  },
  selfDescription: {
    type: String,
  },
  matchScore: {
    type: Number,
    min: 0,
    max: 100
  },
  technicalQuestions: [technicalQuestionsSchema],
  behaviouralQuestions: [behaviouralQuestionsSchema],
  skillGaps: [skillGapsSchema],
  preparationPlan: [preparationPlanSchema]
},{
    timestamps: true
});


const InterviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = InterviewReportModel;