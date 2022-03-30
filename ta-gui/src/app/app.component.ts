import { Component } from '@angular/core';
import { NgModule, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Olavo", cpf: "123", email: "orc@cin.ufpe.br", github:"orc@cin.ufpe.br"};
}

export class Aluno {
  public nome: string;
  public cpf: string;
  public email: string;
  public github:string;

  constructor(nome:string, cpf:string, email:string, github:string){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.github = github;
  }
}
