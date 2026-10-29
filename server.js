import express from 'express';

const app = express();
const PORT = 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à Central de Informações da Escola!');
});

// Rota 2: Status do servidor
app.get('/status', (req, res) => {
  res.json({ status: 'online' });
});

// Rota 3: Informações da escola
app.get('/escola', (req, res) => {
  res.json({
    nome: 'Escola Técnica Futuro',
    cidade: 'São Paulo',
    tipo: 'Ensino Técnico'
  });
});

// Rota 4: Cursos
app.get('/cursos', (req, res) => {
  res.json([
    { id: 1, nome: 'Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Redes de Computadores' },
    { id: 3, nome: 'Administração' }
  ]);
});

// Rota 5: Professor
app.get('/professor', (req, res) => {
  res.json({
    nome: 'Mariana Oliveira',
    disciplina: 'Programação Back-End'
  });
});

// Rota 6: Ajuda
app.get('/ajuda', (req, res) => {
  res.send(
    'Rotas disponíveis: /, /status, /escola, ' +
    '/cursos, /professor e /ajuda.'
  );
});

// Desafio extra
app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Requisição recebida com sucesso!'
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
