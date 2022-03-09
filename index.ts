import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
