//Questão10:
//var numeros = [1,2,5,200,89,5,50];
//var maior = Math.max(...numeros);
//console.log(maior) //200

//Questão11:
//var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
//var maior = Number.NEGATIVE_INFINITY,
  //  menor = Infinity;

//arr.forEach(function(item){
  //if (Number(item) > maior) maior = item;
  //if (Number(item) < menor) menor = item;
//});

//console.log(maior, menor)

//Questão12:
//var elementos = []; 
//var maior = [];
//var menor = [];
//var num = 0;
    
//while (num < 12) {
//elementos.push(parseInt(prompt("Digite um numero inteiro:")));
//num++;
//}

//for (var i = 0; i < elementos.length; i++) {
//if (elementos[i] > 50)
//  maior.push(elementos[i]);
//else
//  menor.push(elementos[i]);
//}
    
//console.log("Existem " + maior.length + " números que maiores que 50!\n");
//console.log("Existem " + menor.length + " números menores que 50!");

//Questão13:
//const numeros = [2, 3, 5, 6, 8];

//console.log(numeros.map((e) => e * 2));

//Questão14:

//var total = 0;
//var numeros = [30,18,8];
//var numeros2 = [10,12,10];
//var numeros3 = [];

//for ( var i = 0; i < numeros.length; i++ ){
  //  total += numeros[i];
    //numeros3.push((numeros[i] + numeros2[i]));
//}

//console.log(total);
//console.log(numeros3);

//Questão15:
//function retornaNNumerosPares(n) {
  //  let numerosPares = [];
  //  for (let i = 0; numerosPares.length < n; i++) {
//        if (i % 2 == 0) {
        //    numerosPares.push(i);
      //  }
    //}
  //  return numerosPares;
//}

//console.log(retornaNNumerosPares(5));

//Questão16:
//const listaProdutos = [
  //{ nome: 'Teclado', preco: 28.0 },
  //{ nome: 'Mouse', preco: 36.0 },
  //{ nome: 'Monitor', preco: 500.0 },
 // { nome: 'CPU', preco: 800.0 },
  //{ nome: 'Teclado', preco: 28.0 },
  //{ nome: 'Monitor', preco: 500.0 },
//];

//const resObject = {};

//listaProdutos.forEach((elem) => {
//  const valorAnterior = resObject[elem.nome] || 0;

  //resObject[elem.nome] = valorAnterior + elem.preco;
//});

//const novoLista = Object.keys(resObject).map((key) => {
 // return { nome: key, preco: resObject[key] };
//});

//console.log(novoLista);
