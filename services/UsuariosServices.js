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
