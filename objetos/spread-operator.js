// este operador copia as propriedades de objetos para outros
const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}

console.log(guerreiro);