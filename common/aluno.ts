export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  metas: any;

  constructor() {
    this.clean();
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas;
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas;
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.copyMetasFrom(from.metas);
  }

  copyMetasFrom(from: any): void {
    this.metas = [];
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }
}