const express = require('express');
const router = express.Router();
const Ator = require('../models/Ator');

router.get('/atores', async (req, res) => {
  try {
    const atores = await Ator.find();
    res.json(atores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar atores' });
  }
});

router.get('/atores/:id', async (req, res) => {
    try {
      const ator = await Ator.findById(req.params.id)
        .populate('filmes')
        .populate('series')
        .populate('documentarios');
      if (!ator) {
        return res.status(404).json({ message: 'Ator não encontrado' });
      }
      res.json(ator);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar ator' });
    }
  });
  
  // Implementar rotas para criação, atualização e deleção de atores
  
  module.exports = router;