export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github:string;

  constructor(nome:string, cpf:string, email:string, github:string){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.github = github;
  }
}
