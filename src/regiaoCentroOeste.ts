import express, { Request, Response } from "express"

const app = express.Router()

app.get('/regiaocentrooeste', (req: Request, res: Response) => {

    try {
        const Estado = req.query.estado

        let regiao = "Região Centro-Oeste"

        let estado,
        capital = ""

        if (typeof Estado === "string") {

            switch (Estado.toLowerCase()) {
                case "matogrosso":
                    capital = "Cuiabá"
                    estado = "Mato Grosso"
                    regiao = regiao
                    break
                case "matogrossodosul":
                    capital = "Campo Grande"
                    estado = "Mato Grosso do Sul"
                    regiao = regiao
                    break
                case "goias":
                    capital = "Goiânia"
                    estado = "Goiás"
                    regiao = regiao
                    break
                case "distritofederal":
                    capital = "Brasília"
                    estado = "Distrito Federal"
                    regiao = regiao
                    break
                default:
                    throw new Error("Valores Inválidos ou não informados")
                    break
            }

            const response = {
                regiao,
                estado,
                capital
            }

            return res.status(200).json({response})

        } else {
            throw new Error("Valores não informados")
        }

    } catch(err) {
        console.log(err)
        return res.status(404).json({Error: `${(err as Error).message}`})
    } 

})

export default app
