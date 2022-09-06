let mongoose = require("mongoose");

const annonceSchema = mongoose.Schema(
  {
    nomProduit: {
      type: String,
      required: true,
    },
    prix: { type: Number, required: true },
    description: {
      type: String,
      required: true,
    },
    photoProduit: { type: String, required: true },
    qteDispo: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const Annonce = mongoose.model("annonces", annonceSchema);

module.exports = Annonce;
