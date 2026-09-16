import express from 'express'

const app = express()
app.use(express.json())

// GET - Lista das operações disponíveis
app.get("/api/operacoes", (req, res) => {
  res.status(200).json({
    operacoes: [
      { nome: "Soma", metodo: "POST", rota: "/api/somar" },
      { nome: "Subtração", metodo: "POST", rota: "/api/subtrair" },
      { nome: "Multiplicação", metodo: "POST", rota: "/api/multiplicar" },
      { nome: "Divisão", metodo: "POST", rota: "/api/dividir" },
      { nome: "Potência", metodo: "POST", rota: "/api/potencia" },
      { nome: "Raiz Quadrada", metodo: "POST", rota: "/api/raiz" }
    ]
  })
})

// POST - Soma
app.post("/api/somar", (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  const resultado = num1 + num2
  res.status(200).json({ message: `Resultado: ${resultado}` })
})

// POST - Subtração
app.post("/api/subtrair", (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  const resultado = num1 - num2
  res.status(200).json({ message: `Resultado: ${resultado}` })
})

// POST - Multiplicação
app.post("/api/multiplicar", (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  const resultado = num1 * num2
  res.status(200).json({ message: `Resultado: ${resultado}` })
})

// POST - Divisão
app.post("/api/dividir", (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)

  if (num2 === 0) {
    return res.status(400).json({ message: "Não é possível dividir por zero" })
  }

  const resultado = num1 / num2
  res.status(200).json({ message: `Resultado: ${resultado}` })
})

//POTENCIA
app.post("/api/potência", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  const resultado = num1 ** num2;

  res.json({ message: `Resultado: ${resultado}` });
});

//RAIZ
app.post("/api/raiz", (req, res) => {
  const num1 = req.body.num1;

  const resultado = Math.sqrt(num1);

  res.json({ message: `Resultado: ${resultado}` });
});

app.get("/api/operacoes", (req, res) => {
  const operacoes = [
  { "operacao": "Celsius para Fahrenheit", "rota": "/api/celsius-fahrenheit" },
  { "operacao": "Fahrenheit para Celsius", "rota": "/api/fahrenheit-celsius" },
  { "operacao": "Celsius para Kelvin", "rota": "/api/celsius-kelvin" }
  ]
  res.status(200).json(operacoes)
})

//CELSIUS
app.post("/api/celsius-fahrenheit", (req, res) => {
  const celsius = Number(req.body.celsius)
  const resultado = (celsius * 9/5) + 32
  res.status(200).json({ message: `Resultado: ${resultado} Farenheit` })
})

//FARENHEIT
app.post("/api/fahrenheit-celsius", (req, res) => {
  const farenheit = Number(req.body.farenheit)
  const resultado = (farenheit - 32) * 5/9
  res.status(200).json({ message: `Resultado: ${resultado} Celsius` })
})

//KELVIN
//`K = C + 273.15`
app.post("/api/celsius-kelvin", (req, res) => {
  const celsius = Number(req.body.celsius)
  const resultado = celsius + 273.15
  res.status(200).json({ message: `Resultado: ${resultado} Kelvin` })
})

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000")
})