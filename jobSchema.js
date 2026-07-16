const mongoose = require("mongoose")

// create schema
const jobSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
})
const job = mongoose.model("JOBSERVER", jobSchema)
module.exports =job