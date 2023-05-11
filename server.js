const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// function coi(req, res, next) {
//   res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//   res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
//   next();
// }

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use("/", express.static(path.resolve(__dirname, "public")));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
