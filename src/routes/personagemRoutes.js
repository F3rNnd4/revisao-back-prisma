import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagensRouter = express.Router();

// Rotas de Personagems
// GET /api/Personagems - Listar todos os Personagems
personagensRouter.get("/", PersonagemController.getAllPersonagems);

// GET /api/Personagems/:id - Obter um Personagem pelo ID
personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /api/Personagems - Criar um novo Personagem
personagensRouter.post("/", PersonagemController.createPersonagem);

// PUT /api/Personagems/:id - Atualizar um Personagem
personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /api/Personagems/:id - Remover um Personagem
personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagensRouter;