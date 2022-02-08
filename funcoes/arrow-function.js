function apresentar(nome){
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
console.log(soma)
console.log(apresentarArrow)

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10){
        return `seu número é ${somaNumerosPequenos}`
    }else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos)
// operador maior ou igual que =>