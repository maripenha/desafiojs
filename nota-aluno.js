//Nome do aluno
const nomeAluno = "Mariana";

// Definindo as notas do aluno
const nota1 = 7;
const nota2 = 6;
const nota3 = 8;

//Calculando a média
const mediaFinal = (nota1 + nota2 + nota3) / 3;

//Resultados
if (mediaFinal >= 7) {
    console.log(
      `A aluna ${nomeAluno} foi aprovada com a média final de ${mediaFinal}.`
      );
} else if (mediaFinal <= 4) {
    console.log(
      `A aluna ${nomeAluno} foi reprovada com a média final de ${mediaFinal}.`
      );
    } else if (mediaFinal <= 6) {
        console.log(
          `A aluna ${nomeAluno} ficou de recuperação com a média final de ${mediaFinal}.`
          );
  } else {
    (
      `Erro!`
    );
  }
