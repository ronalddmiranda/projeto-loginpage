function mostrarSenha() {
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('mostrar')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
    } else {
        inputPass.setAttribute('type', 'password')
    }
}