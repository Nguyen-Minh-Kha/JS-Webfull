let Annonce = require("../model/annonce");

exports.Index = async (req, res) => {
  try {
    let annonces = await Annonce.find();
    res.json(annonces);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.Create = async (req, res) => {
  try {
    req.body.idClient = req.payload.id_utilisateur;
    let annonce = await Annonce.create(req.body);
    res.status(201).json(annonce);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Show = async (req, res) => {
  try {
    let { id } = req.params;
    let annonce = await Annonce.findById(id);
    if (annonce) {
      res.json(annonce);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Update = async (req, res) => {
  try {
    let { id } = req.params;
    let { nomProduit, prix, description, photoProduit, qteDispo } = req.body;
    let annonce = await Annonce.findById(id);
    if (annonce) {
      if (annonce.user == req.payload.user) {
        annonce.nomProduit = nomProduit;
        annonce.prix = prix;
        annonce.description = description;
        annonce.photoProduit = photoProduit;
        annonce.qteDispo = qteDispo;
        await annonce.save();
        res.json(annonce);
      } else {
        res
          .status(403)
          .json({ message: "vous n'avez pas d'acces à ces données" });
      }
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Destroy = async (req, res) => {
  try {
    let { id } = req.params;
    let annonce = await Annonce.findById(id);
    if (annonce) {
      if (annonce.user == req.payload.user) {
        await annonce.delete();
        res.json(annonce);
      } else {
        res
          .status(403)
          .json({ message: "Vous n'avez pas accès à ces données" });
      }
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAnnonceUser = async (req, res) => {
  try {
    const annonces = await Annonce.find();
    res.json(annonces);
  } catch (error) {
    res.json({ error: error.message });
  }
};
