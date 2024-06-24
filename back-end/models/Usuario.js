const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  foto: { type: String },
  dependentes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dependente' }],
});

module.exports = mongoose.model('Usuario', usuarioSchema);
