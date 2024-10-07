// routes/exchange.js
import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req, res) => {
    const apiKey = 'e83b593df94268fa3bfe9125';
    const url = `https://api.exchangerate-api.com/v4/latest/USD`; // URL da API de câmbio

    try {
        const response = await axios.get(url);
        const data = response.data;

        // Aqui você pode manipular os dados conforme necessário
        const brlRate = data.rates.BRL;

        res.json({ rate: brlRate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter a taxa de câmbio' });
    }
});

export default router;
