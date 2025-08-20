// class Curso {
//     #idCurso;
//     #alunosMatriculados;
//     constructor(nome, cargaHoraria, professor) {
//         this.nome = nome;
//         this.cargaHoraria = cargaHoraria;
//         this.professor = professor;        
//     }


// }

class Curso {
    // Atributos públicos
    nome;
    cargaHoraria;
    professor;
  
    // Atributos privados
    #idCurso;
    #alunosMatriculados = [];
  
    constructor(nome, cargaHoraria, professor) {
      this.nome = nome;
      this.cargaHoraria = cargaHoraria;
      this.professor = professor;
      this.#idCurso = this.#gerarId();
    }
  
    #gerarId() {
      return 'CURSO-' + Math.floor(Math.random() * 10000);
    }
  
    #validarAluno(aluno) {
      return this.#alunosMatriculados.includes(aluno);
    }
  
    get idCurso() {
  return this.#idCurso;
    }
  
    mostrarDados() {
      console.log(`Curso: ${this.nome}`);
      console.log(`Carga Horária: ${this.cargaHoraria} horas`);
      console.log(`Professor: ${this.professor.nome}`);
      console.log(`Alunos Matriculados: ${this.#alunosMatriculados.length}`);
    }
  
    matricularAluno(aluno) {
      if (this.#validarAluno(aluno)) {
        console.log(`O aluno ${aluno} já está matriculado.`);
      } else {
        this.#alunosMatriculados.push(aluno);
        console.log(`Aluno ${aluno} matriculado com sucesso.`);
    }
  }

  removerAluno(aluno) {
    if (this.#validarAluno(aluno)) {
      this.#alunosMatriculados = this.#alunosMatriculados.filter(a => a !== aluno);
      console.log(`Aluno ${aluno} removido com sucesso.`);
    } else {
      console.log(`O aluno ${aluno} não está matriculado.`);
    }
  }


  listarAlunos() {
    console.log(`Lista de Alunos Matriculados:`);
    this.#alunosMatriculados.forEach((aluno, index) => {
      console.log(`${index + 1}. ${aluno}`);
});
  }
}


const professor = { nome: "Pablo", disciplina: "Front-end" };

const cursoFrontend = new Curso("Front-end", 40, professor);

cursoFrontend.mostrarDados();
cursoFrontend.matricularAluno("Júlio César");
cursoFrontend.matricularAluno("André");
cursoFrontend.matricularAluno("Herbert");
cursoFrontend.matricularAluno("Daniele");
cursoFrontend.matricularAluno("Daniele"); // tentativa duplicada
cursoFrontend.listarAlunos();
cursoFrontend.removerAluno("André");
cursoFrontend.listarAlunos();

console.log("ID do Curso:", cursoFrontend.idCurso);