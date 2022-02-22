const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado  // o operador delete ele vai no objeto e remover a propriedade aliado

console.log(objPersonagem.aliado) //undefined (aqui ele dá indefinido porque eu usei o delete)