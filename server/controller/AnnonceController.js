const { request } = require("express");
let Annonce = require("../model/annonce");

exports.Index = async (req, res) => {
  try {
    let annonces = await Annonce.find();
    res.status(200).json(annonces);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.Create = async (req, res) => {
  try {
    let annonce = await Annonce.create(req.body);
    res.status(200).json(annonce);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Show = async (req, res) => {
  try {
    let { id } = req.params;
    let annonce = await Annonce.findById(id);
    res.status(200).json(annonce);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Update = async (req, res) => {
  try {
    let { id } = req.params;
    let { nomProduit, prix, description, photoProduit, qteDispo } = req.body;
    let annonce = await Annonce.findById(id);
    console.log(annonce);
    annonce.nomProduit = nomProduit;
    annonce.prix = prix;
    annonce.description = description;
    annonce.photoProduit = photoProduit;
    annonce.qteDispo = qteDispo;
    console.log(annonce);
    await annonce.save();
    res.status(200).json(annonce);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Destroy = async (req, res) => {
  try {
    let { id } = req.params;
    let annonce = await Annonce.findById(id);
    await annonce.delete();
    res.status(200).json(annonce);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
