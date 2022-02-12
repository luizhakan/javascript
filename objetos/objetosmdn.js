// OBS : TODO ESSE CÓDIGO FOI FEITO DIRETO NO NODE PELO TERMINAL, ENTÃO SE FOR USAR NO VSCODE, 
// estudo do objeto Map. referência : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

let map1 = new Map();
map1.set('a', 1)  // set = definir
console.log(map1)
// new Map(1);{ 'a' ; 1 }
map1.set('b', 2)  // set = definir
// Map(3);{ 'a' ; 1, 'b' ; 2, 'c' ; 8 }
console.log(map1.get('a'))
console.log(map1.get('a', 'b', 'c'))
// 1
console.log(map1.get('c', 'b'))
// 8
map1.set('a', 97)  // set = definir
// Map(3);{ 'a' ; 97, 'b' ; 2, 'c' ; 8 }
console.log(map1.get('a'))
// 97
console.log(map1.size)
// 3
map1.delete('c')  // delete = deletar o elemento que eu quiser
console.log(map1.size)
// 2

// Um objeto Map itera seus elementos na ordem da inserção - um loop for...of(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) retorna um array de [key, value]cada iteração
const contato = new Map()

contato.set('Luiz', {telefone: '81985573942', endereço: 'ilha joana bezerra, recife-pe'}) // set = definir
// nesse contato.set eu adicionei minha primeira chave, que é o 'Luiz', logo em seguida entre colchetes coloquei os dados de contato!
console.log(contato.get('Luiz'))

contato.set('Hillary', {telefone: '555-5842-462', endereço: 'bel-air, los angeles'})
console.log(contato.get('Hillary'))
{ telefone: '555-5842-462', 'endereço'; 'bel-air, los angeles' }  // nesse caso aqui, 'Hillary' é o primeiro índice dessa chave, por tanto ela vai receber o telefone e o endereço que o console imprimiu pra mim
