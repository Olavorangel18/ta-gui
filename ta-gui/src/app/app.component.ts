import { Component } from '@angular/core';
import { NgModule, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", cpf: "", email: ""};
}

export class Aluno {
  public nome: string;
  public cpf: string;
  public email: string;

  constructor(nome:string, cpf:string, email:string){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
  }
}
