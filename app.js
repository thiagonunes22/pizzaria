// 1- Importar o express
const express = require('express')

// 2- Criar o servidor
const servidor = express()

// 3- definir uma rota neste servidor
// endereço, método, função callback (a ação que o servidor vai realizar quando requisitado)

servidor.get('/usuarios', (req, res)=>{
    console.log("chegou uma requisição!")
    res.send("Permaneça em linha")
})
    

//4- Por o servidro no modo "aguardando requisição"
servidor.listen(3000)