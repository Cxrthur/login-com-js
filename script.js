var principal = document.getElementById('tudo')
var log = document.getElementById('login')
var cad = document.getElementById('cadastro')
var botaocad = document.getElementById('botaocadastro')
var botaolog = document.getElementById('botaologin')

function ativarcadastro() {
    botaolog.style.transform = 'translateX(-90%)'
    cad.style.transform = 'translateX(112%)'
    cad.style.display = 'flex'
    log.style.display = 'none'
    botaocad.style.display = 'none'
    botaolog.style.display = 'flex'
}

function ativarlogin() {
    log.style.display = 'flex'
    botaolog.style.display = 'none'
    cad.style.display = 'none'
    botaocad.style.display = 'flex'
}