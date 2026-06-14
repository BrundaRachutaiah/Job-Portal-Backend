import app from "../src/app.js";
import connectDB from "../src/config/db.js";

let dbReady = false;

const handler = async (req, res) => {
  try {
    if (!dbReady) {
      await connectDB();
      dbReady = true;
    }

    return app(req, res);
  } catch (error) {
    console.error("Serverless handler error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
