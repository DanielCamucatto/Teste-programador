function cadastro(){
    let nome = document.querySelector('#nome').value;
    let cpf = document.querySelector('#cpf').value;
    let email = document.querySelector('#email').value;
    let nascimento = document.querySelector('#nascimento').value;
    let senha = document.querySelector('#senha').value;
    let confirmar = document.querySelector('#confirmar').value;
    console.log(nome)
    console.log(cpf)
    console.log(email)
    console.log(nascimento)
    console.log(senha)

    if( senha !== confirmar){
        alert('Senha invalida, A senha precisa ser a mesmas')
    }
}
cadastro();

