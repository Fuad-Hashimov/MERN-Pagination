const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connection Success");
  } catch (error) {
    console.log(`MongoDb Connection Field`);
    process.exit(1);
  }
};

module.exports = connectDB;
