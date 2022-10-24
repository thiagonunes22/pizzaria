const usuarios = require('../databases/usuarios.json')
const fs = require('fs')

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
    //usuarios.push(arrayDeUsuarios)
}

function cadastrar(objeto){
// Seu código aqui
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
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
