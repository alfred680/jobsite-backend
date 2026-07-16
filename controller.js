const job=require("./jobSchema")


// addjob

exports.addJob = async (req, res) => {
  try {
    const { title, company, category, location, description } = req.body;

    // Check all field
    if (!title || !company || !category || !location || !description) {
      return res.status(400).json({ message: "Please fill all fields"});
    }

    // Create new job
    const newJob = new job({
      title,
      company,
      category,
      location,
      description,
    });

    // Save 
    await newJob.save();

    res.status(201).json({
      message: "Job posted successfully",
      data: newJob,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await job.find();

    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};


exports.getAll = async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};

    if (category) {
      query.category = category;
    }

    const jobs = await job.find(query);

    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};