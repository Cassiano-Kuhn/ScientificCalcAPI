const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Função para calcular expressão matemática
function calcularExpressao(expressao) {
    try {
        // Substituições para símbolos do front
        expressao = expressao
            .replace(/÷/g, '/')
            .replace(/×/g, '*')
            .replace(/,/g, '.')
            .replace(/π/g, Math.PI);

        // Funções científicas
        expressao = expressao
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/√/g, 'Math.sqrt');

        return eval(expressao);
    } catch (erro) {
        return "Erro";
    }
}

// Rota da calculadora
app.post('/calcular', (req, res) => {
    const { expressao } = req.body;

    const resultado = calcularExpressao(expressao);

    res.json({ resultado });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
