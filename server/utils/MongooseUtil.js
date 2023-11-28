//CLI: npm install mongoose --save
const mongoose = require("mongoose");
const MyConstants = require("./MyConstants");
const uri =
  "mongodb+srv://" +
  MyConstants.DB_USER +
  ":" +
  MyConstants.DB_PASS +
  "@" +
  MyConstants.DB_SERVER +
  "/" +
  MyConstants.DB_DATABASE;
// const uri = `mongodb+srv://canh177:canhga177@loser123.u1pzcor.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true });

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log(
      "Connected to " + MyConstants.DB_SERVER + "/" + MyConstants.DB_DATABASE
    );
  })
  .catch((err) => {
    console.error(err);
  });
