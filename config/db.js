const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            family: 4, // Force IPv4 to avoid DNS resolution issues
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("MongoDB Connection Error Details:");
        console.error(err.message);
        // Exit process with failure if DB connection is essential
        process.exit(1); 
    }
};

module.exports = connectDB;