import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.configDotenv();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
