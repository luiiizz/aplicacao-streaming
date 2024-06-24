const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Conectar ao banco de dados
mongoose.connect('mongodb://localhost:27017/aplicacao-streaming', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao banco de dados'))
.catch(error => console.error('Erro ao conectar ao banco de dados:', error));

// Middleware para parsear JSON requests
app.use(express.json());

// Rotas da API
app.get('/', (req,res) =>{
    res.send('Back End da aplicação para streaming!');
})
app.use('/api/atores', require('./routes/ator'));
app.use('/api/conteudos', require('./routes/conteudo'));
app.use('/api/usuario', require('./routes/usuario'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
