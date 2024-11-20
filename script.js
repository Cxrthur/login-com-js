var formulariologin = document.getElementById('formlogin')
var botaologin = document.getElementById('loginbutton')
var formulariocadastro = document.getElementById('formcad')
var botaocadastro = document.getElementById('cadbutton')
var login = document.getElementById('pralogar')
var cadastro = document.getElementById('pracadastrar')

function logar() {
    formulariologin.style.display = 'flex'
    botaologin.style.display = 'none'
    formulariocadastro.style.display = 'none'
    botaocadastro.style.display = 'flex'
    login.style.backgroundColor = 'white'
    cadastro.style.backgroundColor = 'rgba(255, 32, 32, 0.925)'
}

function cadastrar() {
    formulariologin.style.display = 'none'
    botaologin.style.display = 'flex'
    formulariocadastro.style.display = 'flex'
    botaocadastro.style.display = 'none'
    login.style.backgroundColor = 'rgba(255, 32, 32, 0.925)'
    cadastro.style.backgroundColor = 'white'

}