import express from 'express'
import connectDb from './src/database/db'
import cors from 'cors'
import routes from './src/routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

connectDb()
    .then(() => {
        app.listen(3000, () => console.log('Connected to DB.'))
    })
    .catch((err) => console.log('Erro: ' + err))