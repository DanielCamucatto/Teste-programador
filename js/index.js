function login(){
    let cpf = document.getElementById('cpf').value;
    let senha = document.getElementById('senha').value
    validaCPF();
    validaSenha();
}
login();

function validaCPF(Objcpf) {
    let cpfUsuario = Objcpf.value;
    exp = /\.|\-/g;
    cpfUsuario = cpfUsuario.toString().replace(exp, "");
    let digitoDigitado = eval(cpfUsuario.charAt(9) + cpfUsuario.charAt(10));
    let soma1 = 0, soma2 = 0;
    let vlr = 11;

    for (i = 1; i <= 9; i++) {
        soma1 += eval(cpfUsuario.charAt(i) * (vlr - 1));
        soma2 += eval(cpfUsuario.charAt(i) * vlr);
        vlr--;
    }
    soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

    let digitoGerado = (soma1 * 10) + soma2;
    if (digitoGerado !== digitoDigitado)
    {
        alert('CPF Invalido!');
        Objcpf.value = '';
    } else if (digitoGerado === 00000000000)
    {
        alert('CPF Invalido!');
        Objcpf.value = '';
    }
}
function validaSenha(){
    let done = 0;
    let usuario = document.getElementsByName('senha')[0].value;
    usuario = usuario.toLowerCase();
    let senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();

  if (usuario == "bcf" && senha == "bcf") {
    window.location = "index.html";
    done = 1;
  }
  if (done == 0) {
    alert("Dados incorretos, tente novamente");

  }
}
function nova(){
  location.href = 'cadastro.html';
}