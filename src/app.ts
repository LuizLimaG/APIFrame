import express from "express";
import RegiaoSulRoutes from "./regiaoSul"
import RegiaoNorteRoutes from "./regiaoNorte"
import RegiaoCentroOesteRoutes from "./regiaoCentroOeste"
import RegiaoNordesteRoutes from "./regiaoNordeste"
import RegiaoSudesteRoutes from "./regiaoSudeste"

const app = express()
const port = 4000

app.get("/regiaonorte", RegiaoNorteRoutes);
app.get("/regiaonordeste", RegiaoNordesteRoutes);
app.get("/regiaosudeste", RegiaoSudesteRoutes);
app.get("/regiaosul", RegiaoSulRoutes);
app.get("/regiaocentrooeste", RegiaoCentroOesteRoutes);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});