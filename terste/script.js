var tudo = document.getElementById('all')
var um = document.getElementById('um')
var dois = document.getElementById('dois')

function inverte() {
    um.style.transform = 'translateY(100%)'
    dois.style.transform = 'translateY(-100%)'
}

function invertedenovo() {
    um.style.transform = 'translateY(0)'
    dois.style.transform = 'translateY(0)'
}