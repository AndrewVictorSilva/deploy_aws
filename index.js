const express = require ('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({message:'Server is Up!'})
})

app.listen(3333)