import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import './helper/passport.js'; // Passport configuration
import connectDb from "./Db/connect.js"
import authRoutes from "./routes/auth/index.js"
import slackRoutes from "./routes/slack/index.js"
import cookieParser from 'cookie-parser';
import cors from "cors"

dotenv.config();

// server configuration
const app = express();
const PORT = process.env.PORT || 5000;

// all middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "abhaymishra",
  cookie: { maxAge: 3600000 * 24 }
}))

// route middlware
app.use('/api/auth', authRoutes);
app.use('/api/slack', slackRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// databse connection 
const databaseConnection = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.get("/", (req, res) => {
      res.send("Hi Welcome Kavach Backend")
    })
  } catch (error) {
    console.log(error);
  }
}
databaseConnection();
