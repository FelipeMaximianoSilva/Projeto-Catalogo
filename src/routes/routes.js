import express from "express";
import {
  getIndex,
  getRegistro,
  getCaes,
  getGatos,
  getDetalhes,
  getDeletarCaes,
  getDeletarGatos,
  postRegistro,
  getEditar,
  postEditar,
} from "../controller/AnimalController.js";

export const routes = express.Router();

routes.get("/", getIndex);

routes.get("/registro", getRegistro);

routes.post("/registro", postRegistro);

routes.get("/editar/:id", getEditar);

routes.post("/editar/:id", postEditar);

routes.get("/caes", getCaes);

routes.get("/gatos", getGatos);

routes.get("/detalhes/:id", getDetalhes);

routes.get("/deletarCaes/:id", getDeletarCaes);

routes.get("/deletarGatos/:id", getDeletarGatos);
