const express = require('express');
const router = express.Router();
const Conteudo = require('../models/Conteudo');

router.get('/conteudos', async (req, res) => {
  try {
    const conteudos = await Conteudo.find();
    res.json(conteudos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar conteúdos' });
  }
});

router.get('/conteudos/:id', async (req, res) => {
  try {
    const conteudo = await Conteudo.findById(req.params.id)
      .populate('elenco')
      .populate('diretor');
    if (!conteudo) {
      return res.status(404).json({ message: 'Conteúdo não encontrado' });
    }
    res.json(conteudo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar conteúdo' });
  }
});

// Implementar rotas para criação, atualização e deleção de conteúdos

module.exports = router;
