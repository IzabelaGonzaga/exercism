export class Gigasecond {
  private readonly dataInicialMilisegundos: number;

  public constructor(dataInicial: Date){
    this.dataInicialMilisegundos= dataInicial.getTime(); //com this pra ficar acessivel a toda a classe  
  }

  public date(): Date {
    let dataFinalMilisegundosComGiga: number = this.dataInicialMilisegundos + (1e9*1000);  //data dada somada a 1gigasegundo = 1e9 segundos (multiplica por mil pra escrever em milisegundos)
    
    return new Date(dataFinalMilisegundosComGiga);  //retorna o valor encontrado no valor de data
  }
}
