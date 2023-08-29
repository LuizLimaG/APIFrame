import express, { Request, Response } from "express"

const app = express.Router()

app.get('/regiaosul', (req: Request, res: Response) => {

    try {

        const Estado = req.query.estado

        let regiao = "Região Sul"

        let estado,
        capital = ""

        if (typeof Estado === "string") {

            switch (Estado.toLowerCase()) {
                case "riograndedosul":
                    capital = "Porto Alegre"
                    estado = "Rio Grande Do Norte"
                    regiao = regiao
                    break
                case "santacatarina":
                    capital = "Florianópolis"
                    estado = "Santa Catarina"
                    regiao = regiao
                    break
                case "parana":
                    capital = "Curitiba"
                    estado = "Paraná"
                    regiao = regiao
                    break
                default:
                    throw new Error("Valores Inválidos ou não informados")
                    break
            }

            res.status(200).json({
                Região: regiao,
                Estado: estado,
                Capital: capital
            })

        } else {
            throw new Error("Valores não informados")
        }

    } catch (err) {

        return res.status(404).json({Error: `${(err as Error).message}`})

    }

})

export default app