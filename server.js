import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Routes importing
import testRoutes from "./routes/testRoutes.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// database connection
connectDB();

// routes
app.use("/api/v1/test", testRoutes);
//register route
app.use("/api/v1/auth", authRoute);
//get user route
app.use("/api/v1/user", userRoute);
// update user route
app.use("/api/v1/user", userRoute);
// update user password route
app.use("/api/v1/user", userRoute);
// reset user password route
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
