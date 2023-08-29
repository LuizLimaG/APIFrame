"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
app.get('/regiaonordeste', (req, res) => {
    try {
        const Estado = req.query.estado;
        let regiao = "Região Nordeste";
        let estado, capital = "";
        if (typeof Estado === "string") {
            switch (Estado.toLowerCase()) {
                case "maranhao":
                    capital = "São Luís do Maranhão";
                    estado = "Maranhão";
                    regiao = regiao;
                    break;
                case "piaui":
                    capital = "Teresina";
                    estado = "Piauí";
                    regiao = regiao;
                    break;
                case "ceara":
                    capital = "Fortaleza";
                    estado = "Ceará";
                    regiao = regiao;
                    break;
                case "riograndedonorte":
                    capital = "Natal";
                    estado = "Rio Grande do Norte";
                    regiao = regiao;
                    break;
                case "paraiba":
                    capital = "João Pessoa";
                    estado = "Paraíba";
                    regiao = regiao;
                    break;
                case "pernambuco":
                    capital = "Recife";
                    estado = "Pernambuco";
                    regiao = regiao;
                    break;
                case "alagoas":
                    capital = "Maceió";
                    estado = "Alagoas";
                    regiao = regiao;
                    break;
                case "sergipe":
                    capital = "Aracaju";
                    estado = "Sergipe";
                    regiao = regiao;
                    break;
                case "bahia":
                    capital = "Salvador";
                    estado = "Bahia";
                    regiao = regiao;
                    break;
                default:
                    throw new Error("Valores Inválidos ou não informados");
                    break;
            }
            const response = {
                regiao,
                estado,
                capital
            };
            return res.status(200).json({ response });
        }
        else {
            throw new Error("Valores não informados");
        }
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({ Error: `${err.message}` });
    }
});
exports.default = app;
