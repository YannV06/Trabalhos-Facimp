import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.get('/api/exchange-rate', async (req, res) => {
  const apiKey = 'e83b593df94268fa3bfe9125'; // Use a chave da API fornecida
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data); // Envia os dados de volta para o navegador
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados de câmbio' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
