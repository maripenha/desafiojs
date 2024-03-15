// Definindo as notas do aluno
const nota1 = 7;
const nota2 = 6;
const nota3 = 8;

//Calculando a média
const media = (nota1 + nota2 + nota3) / 3;

//Resultados
if (media >= 7) {
    console.log("Aluno aprovado.");
} else if (media <= 4) {
    console.log("Aluno reprovado.")
  } else {
    ("Aluno em recuperação.")
  }
