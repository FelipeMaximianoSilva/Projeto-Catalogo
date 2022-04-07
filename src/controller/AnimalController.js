import express from "express";
import { response } from "express";
import { dados } from "../model/animal.js";

export const getIndex = async (req, res) => {
  res.render("index.ejs");
};

export const getRegistro = (req, res) => {
  res.status(200).render("registro.ejs");
};

export const postRegistro = (req, res) => {
  console.log(req)
}

export const getDetalhes = async (req, res) => {
  try {
    const animais = await dados.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      animais,
    });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getCaes = async (req, res) => {
  try {
    const animais = await dados.findAll();
    res.render("caes.ejs", {
      animais,
    });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getGatos = async (req, res) => {
  try {
    const animais = await dados.findAll();
    res.render("gatos.ejs", {
      animais,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSobre = (req, res) => {
  res.render("sobre.ejs");
};

[
  {
    id: "",
    nome: "",
    img: "",
    tipo: "",
    genero: "",
    medic: "",
    porte: "",
    infonome: "",
    tel: "",
    infoemail: "",
  },
];

export const getDeletarCaes = async (req, res) => {
  try {
    await dados.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).redirect("/caes");
  } catch (err) {
    res.status(500).send({err: err.message});
  }
};

export const getDeletarGatos = async (req, res) => {
  try {
    await dados.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).redirect("/gatos");
  } catch (err) {
    res.status(500).send({err: err.message});
  }
};
