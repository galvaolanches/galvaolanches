const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota para receber pedidos
app.post("/pedido", (req, res) => {
  const pedido = req.body;
  console.log("Novo pedido:", pedido);
  res.json({ status: "Pedido recebido!", pedido });
});

// Teste simples
app.get("/", (req, res) => {
  res.send("Backend do Cardápio Digital rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
