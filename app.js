// 1- Importar o express
const express = require('express')
const path = require('path');


// 2- Criar o servidor
const servidor = express()

// define a pasta public como sendo a pasta de arquivos estaticos
servidor.use(express.static(path.join(__dirname, 'public')))



// 3- definir uma rota neste servidor
// endereço, método, função callback (a ação que o servidor vai realizar quando requisitado)

servidor.get('/', (req, res)=>{
    console.log("chegou uma requisição!")
    //return res.send("Permaneça em linha")
    return res.sendFile(__dirname + "/views/index.html")
})

servidor.get('/carrinho',(req,res)=>{
    return res.sendFile(__dirname + "/views/carrinho.html")
})
//4- Por o servidor no modo "aguardando requisição"
servidor.listen(3000)