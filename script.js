var formulariologin = document.getElementById('formlogin')
var botaologin = document.getElementById('loginbutton')
var formulariocadastro = document.getElementById('formcad')
var botaocadastro = document.getElementById('cadbutton')

function logar() {
    formulariologin.style.display = 'flex'
    botaologin.style.display = 'none'
    formulariocadastro.style.display = 'none'
    botaocadastro.style.display = 'flex'
}

function cadastrar() {
    formulariologin.style.display = 'none'
    botaologin.style.display = 'flex'
    formulariocadastro.style.display = 'flex'
    botaocadastro.style.display = 'none'
}