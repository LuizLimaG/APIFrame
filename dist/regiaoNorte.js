"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
app.get('/regiaonorte', (req, res) => {
    try {
        const Estado = req.query.estado;
        let regiao = "Região Norte";
        let estado, capital = "";
        if (typeof Estado === "string") {
            switch (Estado.toLowerCase()) {
                case "amazonas":
                    capital = "Manaus";
                    estado = "Amazonas";
                    regiao = regiao;
                    break;
                case "roraima":
                    capital = "Boa Vista";
                    estado = "Roraima";
                    regiao = regiao;
                    break;
                case "rondonia":
                    capital = "Porto Velho";
                    estado = "Rondônia";
                    regiao = regiao;
                    break;
                case "para":
                    capital = "Belém";
                    estado = "Pará";
                    regiao = regiao;
                    break;
                case "tocantins":
                    capital = "Palmas";
                    estado = "Tocantins";
                    regiao = regiao;
                    break;
                case "amapa":
                    capital = "Macapá";
                    estado = "Amapá";
                    regiao = regiao;
                    break;
                case "acre":
                    capital = "Rio Branco";
                    estado = "Acre";
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
