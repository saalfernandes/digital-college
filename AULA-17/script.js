// Funções
//function somarNotas(notas) {
//    let soma = 0
 //   notas.forEach((nota) => soma += nota)
//    return soma
//}

  //  const soma = somarNotas(notas)
//    const quantidade = notas.length
    
 //   const media = (soma / quantidade).toFixed(2)
//    console.log(media)
//}

// calcularMedia([6, 7, 8.5, 5])

// Array - Objeto - Spread/Rest Operator
//const alunos = [
 //   { nome: 'Fulano', idade: 9, serie: '5-A' },
 //   { nome: 'Ciclano', idade: 11, serie: '6-C' },
 //   { nome: 'Beltrano', idade: 13, serie: '8-B' },
//]

//const spread = [ ...alunos, { nome: 'Gil', idade: 26, serie: 'undefined' } ]
//const { nome, ...rest } = alunos[0] 

//console.log(rest)

// Métodos - push - pop - unshift - shift - findIndex - find - filter - splice
//alunos.push({ nome: 'John Joe', idade: 12, serie: '7-A' })
//alunos.pop()

//alunos.unshift({ nome: 'John Joe', idade: 12, serie: '7-A' })
//alunos.shift()

//const index = alunos.findIndex(({ nome }) => nome === 'Fulano')
//const aluno = alunos.find(({ nome }) => nome === 'Beltrano')

// @param indice
// @param quantidade
//alunos.splice(1, 1)

//console.log(alunos)

//const filter = alunos.filter((aluno) => aluno.idade > 11)

//console.log('Filter', filter)

//let crudAlunos = []


//function criarAluno(aluno) {
 //   const id = crudAlunos.length
//    crudAlunos.push({ nome: 'John Joe', idade: 12, serie: '7-A' })
 //   crudAlunos.push({ nome: 'Sebastian swallow', idade: 18, serie: '1 ano' })
//}
//function lerAluno (id) {}
////function atualizarAluno(id) {}
//function deletarAluno(id) {}

//criarAluno()
//console.log(crudAlunos)

// let crudAlunos = []

// function gerarId() {
//     let random = (Math.floor(Math.random() * (9999 - 0) - 0)).toString()
//   if (random.length < 4) random = random.padStart(4, '0')
//     return random
// }

// function criarAluno1(aluno) {
//   const id = gerarId()
//     const novoAluno = { id, ...aluno }
//     crudAlunos.push(novoAluno)
// }

// function criarAluno2(nome, serie, idade) {
//     const id = crudAlunos.length
//     const novoAluno = { id, nome, serie, idade }
//     crudAlunos.push(novoAluno)
// }

// criarAluno1({nome: 'Mike Covalski', idade: '17 anos' , serie: '2-ano'})
// criarAluno2('Mike Covalski', '2-B', 17)

// console.log(crudAlunos)


// function LerAluno(id) {
//     const aluno = crudAlunos.length
//     crudAlunos({nome: 'Mike Covalski', idade: '17 anos' , serie: '2-ano'})
// }
// console.log(crudAlunos)

// function lerAluno(id) {
//     const aluno = crudAlunos.find((aluno) => aluno.id === id)
//     if (!aluno) return console.log('Não foi encontrado aluno com esse ID')
//     console.log(aluno)
// }

// lerAluno(0)
// lerAluno(1)
// lerAluno(2)

// function deletarAluno(id) {
//   const index = crudAlunos.findIndex((aluno) => aluno.id === id)
//   if (index === -1) return console.log('O aluno não existe!')
   
//   crudAlunos.splice(index, 1)
// }

// deletarAluno(0)
// console.log(crudAlunos)