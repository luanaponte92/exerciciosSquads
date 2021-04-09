/*
Uma escola de idiomas oferece uma bolsa de 50% para seus alunos
que desejam se matricular em um segundo idioma. 
Requisitos para a bolsa:
Ser aluno em um curso de idioma na escola.
Matricular-se em um segundo idioma oferecido pela escola.
Possuir média maior ou igual a 8 no primeiro idioma.
*/

const ler = require("prompt-sync")();
var aluno = ler("Você já é aluno da escola?");
var matricula = ler("Deseja fazer a matrícula em um segundo idioma? ");
var media = ler("Possui média maior ou igual a 8 no primeiro idioma? ");

var r = aluno == "sim" && matricula == "sim" && media == "sim";

var bolsa;
if (r) bolsa = "Parabéns! Você conseguiu a bolsa de estudos!";
else bolsa = "Infelizmente, você não possui os requisitos necessários.";

console.log("Resultado: ", bolsa);