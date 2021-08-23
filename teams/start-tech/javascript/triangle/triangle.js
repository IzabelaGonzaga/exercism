//
// This is the 'Triangle' exercise.
// Verifica se um triângulo é equilátero, isóceles ou escaleno
// Triângulo equilátero: tem os três lados do mesmo comprimento. 
// Triângulo isócelos: tem pelo menos dois lados do mesmo comprimento. (Às vezes é especificado como tendo exatamente dois lados com o mesmo comprimento, mas para os propósitos deste exercício diremos pelo menos dois.)
// Triângulo escaleno: tem todos os lados de diferentes comprimentos.

export class Triangle {
  ladoA = 0;
  ladoB = 0;
  ladoC = 0;

  constructor(...sides) {   // esse três pontos são chamados de spread operator e serve para indicar que podem ser passados diversos parâmetros em sides
    this.ladoA = sides [0]; // variável ladoA recebe valor presente na posição 0 da string sides 
    this.ladoB = sides [1]; // variável ladoB recebe valor presente na posição 1 da string sides 
    this.ladoC = sides [2]; // variável ladoC recebe valor presente na posição 2 da string sides 
    this.existenciaTriangulo = this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0;  // Verifica se todos os lados do triângulo tem comprimento maior que zero 
    this.desigualdadeTriangulo = this.ladoA + this.ladoB >= this.ladoC && this.ladoA + this.ladoC >= this.ladoB && this.ladoB + this.ladoC >= this.ladoA; // Verifica se o triângulo atende a condição de desigualdade (para que a forma seja um triângulo a soma dos comprimentos de qualquer dois lados deve ser maior ou igual ao comprimento do terceiro lado) 
  } 

  get isEquilateral() {
      return (this.existenciaTriangulo && this.desigualdadeTriangulo) && (this.ladoA === this.ladoB && this.ladoB === this.ladoC); // Verifica se as condições de existência do triângulo foram atendidas E se é um triângulo equilátero
  }

  get isIsosceles() {
      return (this.existenciaTriangulo && this.desigualdadeTriangulo) && (this.ladoA === this.ladoB || this.ladoB === this.ladoC || this.ladoA === this.ladoC); // Verifica se as condições de existência do triângulo foram atendidas E se é um triângulo isóceles
  }

  get isScalene() {
      return (this.existenciaTriangulo && this.desigualdadeTriangulo) && (this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoA != this.ladoC); // Verifica se as condições de existência do triângulo foram atendidas E se é um triângulo escaleno
  }
}