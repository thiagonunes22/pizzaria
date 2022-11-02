const usuarios = require('../databases/usuarios.json')
const fs = require('fs')
const bcrypt = require('bcrypt')


function listar(){
    console.table(usuarios.map(u => `ID : ${u.id} | Nome: ${u.nome} | Email: ${u.email}`))
}

function listarNomes(){
console.table(usuarios.map(u => u.nome))
}

function buscar(trecho){
    // retornar um array com os usuários que tenham nome contendo o trecho buscado
    // array.filter e includes
  console.log(usuarios.filter(usuario => usuario.nome.includes(trecho)))
}

function salvar(arrayDeUsuarios){
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios,null,4))
}

function cadastrar(objeto){
let novoId = usuarios[usuarios.length - 1].id + 1
let senhaCriptografada = bcrypt.hashSync(objeto.senha,10)

let usuario = {
    id: novoId,
    nome: objeto.nome,
    email: objeto.email,
    senha: senhaCriptografada,
    enderecos: [objeto.endereco],
    formasDePagamento: []
}
 usuarios.push(usuario)
 salvar(usuario)
}

function detalhar(idUsuario){
let usuarioDetalhado = usuarios.find(u => u.id == idUsuario)
console.log(`nome: ${usuarioDetalhado.nome}\n`)
console.log(`email: ${usuarioDetalhado.email}\n`)
console.log('Endereços')
console.table(usuarioDetalhado.enderecos)
console.log('Formas de Pagamento')
console.log(usuarioDetalhado.formasDePagamento)

}

function remover(idDoUsuarioParaRemover){
    let arrayRemover = usuarios.filter(u => u.id != idDoUsuarioParaRemover)
    fs.writeFileSync('./databases/usuarios.json',JSON.stringify(arrayRemover,null,4))
}

function alterar(novosDados, idUsuario){
    let array = []
    for(let i = 0; i< usuarios.length; i++){
        array.push(usuarios[i].id)
    }
    array.indexOf(idUsuario)
    usuarios[array.indexOf(idUsuario)].nome = usuarios.nome
    usuarios[array.indexOf(idUsuario)].email = usuarios.email
    usuarios[array.indexOf(idUsuario)].senha = usuarios.senha

}

function addEndereco(novoEndereco, idUsuario){
    let usuarioId = usuarios.find(u=> u.id == idUsuario)

    let posicao = usuarioId.enderecos

    usuarioId.enderecos.push(novoEndereco)
    salvar(usuarios)
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
    let usuarioId = usuarios.find(u => u.id == idUsuario)

    let posicao = usuarioId.enderecos

    posicao.splice(posicaoDoEndereco, 1)

    salvar(usuarios)

}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
    let usuarioId = usuarios.find(u => u.id == idUsuario)
    
    let posicao = usuarioId.enderecos

    posicao.splice(posicaoDoEndereco, 1, novoEndereco)

    salvar(usuarios)
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    let usuarioId = usuarios.find(u => u.id == idUsuario)
   
    let posicao = usuarioId.formasDePagamento

    posicao.push(novaFormaDePagamento)

    salvar(usuarios)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
 let usuarioId = usuarios.find(u=> u.id == idUsuario)

 let posicao = usuarioId.formasDePagamento

 posicao.splice(posicaoDaFormaDePagamento, 1)

 salvar(usuarios)
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    let usuarioId = usuarios.find(u => u.id == idUsuario)

    let posicao = usuarioId = usuarioId.formasDePagamento

    posicao.splice(posicaoDaFormaDePagamento, 1, novaFormaDePagamento)
    
    salvar(usuarios)
}

const UsuariosServices = {
    cadastrar,
    salvar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    buscar,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;
