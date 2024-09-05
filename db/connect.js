const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://riliwanhazzan:fwDTNNQa0aPH2BF1@cluster0.s6eee.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
