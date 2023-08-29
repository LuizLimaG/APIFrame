"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
app.get('/regiaosul', (req, res) => {
    try {
        const Estado = req.query.estado;
        let regiao = "Região Sul";
        let estado, capital = "";
        if (typeof Estado === "string") {
            switch (Estado.toLowerCase()) {
                case "riograndedosul":
                    capital = "Porto Alegre";
                    estado = "Rio Grande Do Norte";
                    regiao = regiao;
                    break;
                case "santacatarina":
                    capital = "Florianópolis";
                    estado = "Santa Catarina";
                    regiao = regiao;
                    break;
                case "parana":
                    capital = "Curitiba";
                    estado = "Paraná";
                    regiao = regiao;
                    break;
                default:
                    throw new Error("Valores Inválidos ou não informados");
                    break;
            }
            res.status(200).json({
                Região: regiao,
                Estado: estado,
                Capital: capital
            });
        }
        else {
            throw new Error("Valores não informados");
        }
    }
    catch (err) {
        return res.status(404).json({ Error: `${err.message}` });
    }
});
exports.default = app;
