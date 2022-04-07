import express from 'express';
import { getIndex, getRegistro, getCaes, getGatos, getDetalhes, getSobre, getDeletarCaes, getDeletarGatos, postRegistro } from '../controller/AnimalController.js';

export const routes = express.Router();

routes.get("/", getIndex);

routes.get("/registro", getRegistro);

routes.get("/registro", postRegistro);

routes.get("/caes", getCaes);

routes.get("/gatos", getGatos);

routes.get("/detalhes/:id", getDetalhes);

routes.get("/deletarCaes/:id", getDeletarCaes);

routes.get("/deletarGatos/:id", getDeletarGatos)
