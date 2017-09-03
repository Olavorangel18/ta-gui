import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  gravar(aluno: Aluno): Aluno {
    var result:any = [];
    if (!this.alunos.find(a => a.cpf == aluno.cpf)) {
      this.alunos.push(aluno);
      result = this.alunos;
    }
    return result.length;
  }
}
