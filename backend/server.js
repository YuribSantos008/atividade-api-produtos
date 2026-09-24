const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
        {
            nome: "Teclado Mecânico",
            preco: 249.90,
            categoria: "Periféricos"
        },
        {
            nome: "Mouse Gamer",
            preco: 149.90,
            categoria: "Periféricos"
        },
        {
            nome: "Monitor Full HD",
            preco: 899.90,
            categoria: "Monitores"
        }
];
 app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});