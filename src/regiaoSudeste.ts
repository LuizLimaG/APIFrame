import express, { Request, Response } from "express"

const app = express.Router()

app.get('/regiaosudeste', (req: Request, res: Response) => {

    try {
        const Estado = req.query.estado

        let regiao = "Região Sudeste"

        let estado,
        capital = ""

        if (typeof Estado === "string") {

            switch (Estado.toLowerCase()) {
                case "minasgerais":
                    capital = "Belo Horizonte"
                    estado = "Minas Gerais"
                    regiao = regiao
                    break
                case "riodejaneiro":
                    capital = "Rio de Janeiro"
                    estado = "Rio de Janeiro"
                    regiao = regiao
                    break
                case "saopaulo":
                    capital = "São Paulo"
                    estado = "São Paulo"
                    regiao = regiao
                    break
                case "espiritosanto":
                    capital = "Vitória"
                    estado = "Espírito Santo"
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
