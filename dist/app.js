"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const regiaoSul_1 = __importDefault(require("./regiaoSul"));
const regiaoNorte_1 = __importDefault(require("./regiaoNorte"));
const regiaoCentroOeste_1 = __importDefault(require("./regiaoCentroOeste"));
const regiaoNordeste_1 = __importDefault(require("./regiaoNordeste"));
const regiaoSudeste_1 = __importDefault(require("./regiaoSudeste"));
const app = (0, express_1.default)();
const port = 4000;
app.get("/regiaonorte", regiaoNorte_1.default);
app.get("/regiaonordeste", regiaoNordeste_1.default);
app.get("/regiaosudeste", regiaoSudeste_1.default);
app.get("/regiaosul", regiaoSul_1.default);
app.get("/regiaocentrooeste", regiaoCentroOeste_1.default);
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});
