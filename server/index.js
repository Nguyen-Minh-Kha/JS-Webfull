let express = require("express");
const { default: mongoose } = require("mongoose");
let userRouter = require("./route/UserRouter");
let annonceRouter = require("./route/AnnonceRouter");
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let MONGO_URI =
  "mongodb+srv://minhkha:minhkha@js-webfull.hi7wcdp.mongodb.net/?retryWrites=true&w=majority";

let obj = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "JS-Webfull",
};

mongoose
  .connect(MONGO_URI, obj)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/user", userRouter);
app.use("/api/", annonceRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
