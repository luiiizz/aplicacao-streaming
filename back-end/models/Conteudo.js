const mongoose = require('mongoose');

const conteudoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  capa: { type: String, required: true },
  sinopse: { type: String },
  categoria: { type: String, required: true },
  ano: { type: Number, required: true },
  elenco: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ator' }],
  diretor: { type: mongoose.Schema.Types.ObjectId, ref: 'Ator' },
});

module.exports = mongoose.model('Conteudo', conteudoSchema);
