const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Teclado Mecânico",
        preco: 249.90,
        categoria: "Periféricos",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3EdAAzuFDxrj2sEpTDIPNyCAt73gxwFL8dqL1SSTWw&s=10"
    },
    {
        nome: "Mouse Gamer",
        preco: 149.90,
        categoria: "Periféricos",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdzqlu6HjM-U0gJy0dyq0U9hpGssZzNchaB_Tr85T5A&s=10"
    },
    {
        nome: "Monitor Full HD",
        preco: 899.90,
        categoria: "Monitores",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWe_LmCIRlP3fXaw26kYsLH5jHaHuf9Sj30Lz2cv9cZA&s=10"
    }
];
 app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});