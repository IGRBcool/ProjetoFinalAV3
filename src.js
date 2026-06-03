// Painel de Criptografia

let opcoes = [
  "1: Cifra de César",
  "2: Cifra de Atbash",
];

console.log("Bem-vindo ao painel de criptografia!");

//Exibindo as opções para o usuário
console.log(opcoes[0]);
console.log(opcoes[1]);

let escolha = prompt("Escolha a opção:")
// Função para a Cifra de César
function cifraDeCesar(texto, deslocamento) {

  let resultado = "";
  // Percorre cada caractere do texto
  for (let i = 0; i < texto.length; i++) {
    // Verifica se é letra minúscula
    if (texto[i] >= "a" && texto[i] <= "z") {
      let codigo =
        (texto[i].charCodeAt(0) - 97 + deslocamento + 26) % 26;

      resultado += String.fromCharCode(codigo + 97);
      // Verifica se é letra maiúscula
    } else if (texto[i] >= "A" && texto[i] <= "Z") {
      let codigo =
        (texto[i].charCodeAt(0) - 65 + deslocamento + 26) % 26;

      resultado += String.fromCharCode(codigo + 65);
      // Se não for letra, mantém o caractere original
    } else {
      resultado += texto[i];
    }
  }
  // Retorna o texto criptografado
  return resultado;
}
// Função para decifrar a Cifra de César
function decifrarCesar(texto, deslocamento) {
  return cifraDeCesar(texto, -deslocamento);
}

// Função para a Cifra de Atbash
function cifraDeAtbash(texto) {
  let resultado = "";
  // Percorre cada caractere do texto
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    // Verifica se é letra minúscula
    if (letra >= "a" && letra <= "z") {
      resultado += String.fromCharCode(
        122 - (letra.charCodeAt(0) - 97)
      );
      // Verifica se é letra maiúscula
    } else if (letra >= "A" && letra <= "Z") {
      resultado += String.fromCharCode(
        90 - (letra.charCodeAt(0) - 65)
      );
      // Se não for letra, mantém o caractere original
    } else {
      resultado += letra;
    }
  }
  // Retorna o texto criptografado
  return resultado;
}
// Função para decifrar a Cifra de Atbash (é a mesma função, pois é simétrica)
function decifrarAtbash(texto) {
  return cifraDeAtbash(texto);
}

// MENU
// Verifica a escolha do usuário e executa a opção correspondente
if (escolha == 1) {
  console.log("=== Cifra de César ===");

  let texto = prompt("Escreva a frase:");
  // Solicita o deslocamento para a cifra de César
  let deslocamento = parseInt(prompt("Qual será o deslocamento? "));

  let criptografado = cifraDeCesar(texto, deslocamento);
  // Exibe a mensagem criptografada
  console.log("Mensagem criptografada: ", criptografado);

  let descCesar = prompt("Deseja decifrar? (sim ou não) ");
  // Verifica se o usuário deseja decifrar a mensagem
  if (descCesar.toLowerCase() === "sim") {
    // Exibe a mensagem decifrada usando a função de decifrar César
    console.log("Mensagem decifrada:",
      decifrarCesar(criptografado, deslocamento));
  }
  // Se o usuário não deseja decifrar, encerra o programa
  else {
    console.log("Encerrando o programa...");
  }
}
// Verifica se a escolha do usuário é a opção 2 para a Cifra de Atbash
else if (escolha == 2) {

  console.log("=== Cifra de Atbash ===");
  // Solicita ao usuário que escreva a frase a ser criptografada
  let texto = prompt("Escreva a frase:  ");

  let criptografado = cifraDeAtbash(texto);
  // Exibe a mensagem criptografada
  console.log("Mensagem criptografada: ", criptografado);

  let descAtbash = prompt("Deseja decifrar? (sim ou não) ");
  // Verifica se o usuário deseja decifrar a mensagem
  if (descAtbash.toLowerCase() === "sim") {
    // Exibe a mensagem decifrada usando a função de decifrar Atbash
    console.log("Mensagem decifrada: ",
      decifrarAtbash(criptografado));
  }
  // Se o usuário não deseja decifrar, encerra o programa
  else {
    console.log("Encerrando o programa...");

  }
}
