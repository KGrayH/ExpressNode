const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="0;url=https://github.com/alexavvega/Climate-Crisis" />
      </head>
      <body>
        Redirecting to Climate Crisis repository...
      </body>
    </html>
  `);
});

// Typesetting
app.get("/typesetting", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="0;url=https://github.com/KGrayH/typesetting" />
      </head>
      <body>
        Redirecting to Typesetting repository...
      </body>
    </html>
  `);
});

// Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="0;url=https://github.com/KGrayH/FourSortingAlgo" />
      </head>
      <body>
        Redirecting to Four Algorithms repository...
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
