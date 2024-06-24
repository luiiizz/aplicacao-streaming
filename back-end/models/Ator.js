const mongoose = require('mongoose');

const atorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  foto: { type: String },
  biografia: { type: String },
  filmes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Conteudo' }],
  series: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Conteudo' }],
  documentarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Conteudo' }],
});

module.exports = mongoose.model('Ator', atorSchema);
