let mongoose = require("mongoose");
let bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
