const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello DevSpace from ExpressJS!'))

app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`))
