import express from 'express'
import { routes } from './routes.js'
const app = express()
const port = 3333

app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})