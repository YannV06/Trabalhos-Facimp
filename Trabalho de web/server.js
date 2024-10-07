// server.js
import express from 'express';
import path from 'path';
import exchangeRoutes from './routes/exchange.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(path.resolve(), 'public')));

// Usando o módulo de rotas de câmbio
app.use('/api/exchange-rate', exchangeRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});