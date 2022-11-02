const UsuariosServices = require("../UsuariosServices")

UsuariosServices.addFormaDePagamento('cartao',2)

UsuariosServices.removerFormaDePagamento(0,2)

UsuariosServices.alterarFormaDePagamento('dinheiro',0,2)