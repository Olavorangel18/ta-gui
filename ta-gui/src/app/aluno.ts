export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  metas: any;

  constructor() {
    this.clean();
    this.nome="";
    this.cpf = "";
    this.email = "";
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas;
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): Map<string,string> {
    var metas: any;
    for (let key in this.metas) {
      metas[key] = this.metas[key];
    }
    return metas;
  }
}
