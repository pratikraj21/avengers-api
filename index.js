const express = require("express");
const app = express();

app.use(express.static("public"));

const data = {
  ironman: {
    name: "Iron Man",
    identity: "Robert Downy Jr.",
    age: 50,
    power: "Rich and Smart",
    personality: "cooool",
  },
  "captain america": {
    name: "Captain America",
    identity: "Chris Evans",
    age: 44,
    power: "He can do it all day!!",
    personality: "calm",
  },
  thor: {
    name: "Thor Odinson",
    identity: "Chris Hamesworth",
    age: 40,
    power: "He is the most powerful one!!",
    personality: "charming",
  },
  hulk: {
    name: "The Hulk",
    identity: "Mark Ruffalo",
    age: 42,
    power: "Smaaaashh!!",
    personality: "angry",
  },
  "black widow": {
    name: "Black Widow",
    identity: "Scarlett Johansonn",
    age: 37,
    power: "Knows all the martial arts",
    personality: "agile",
  },
  "ant man": {
    name: "Ant Man",
    identity: "Paul Rudd",
    age: 44,
    power: "Can grow big/small",
    personality: "nervous",
  },
  unknown: {
    name: "unknown",
    identity: "unknown",
    age: "unknown",
    power: "unknown",
    personality: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const avengerName = req.params.name.toLowerCase();
  if (data[avengerName]) {
    res.json(data[avengerName]);
  } else {
    res.json(data["unknown"]);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running....`);
});
