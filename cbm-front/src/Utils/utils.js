
function validaCPF(cpf) {
  console.log(cpf)
  var Soma;
  var Resto;
  Soma = 0;
  var strCpf = cpf;

if (strCpf === "00000000000") return false;

for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCpf.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11))  Resto = 0;
  if (Resto !== parseInt(strCpf.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCpf.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11))  Resto = 0;
  if (Resto !== parseInt(strCpf.substring(10, 11) ) ) return false;

  return true;
}

function addFormacao() {

  console.log("fui clicado");
}
export {validaCPF, addFormacao};
  

