/*
ORDEM DE PRECEDÊNCIA :
1 - OPERADORES ARITMÉTICOS
2 - OPERADORES RELACIONAIS
3 - OPERADORES LÓGICOS
*/

/*
1 - !  - negação (não)
2 - && - conjunção (e)
3 - || - disjunção (ou)
*/

/*
não
!   true = false
    false = true

e
&&  true && true   = false
    true && false  = false
    false && true  = true
    false && false = false

ou
||  true  || false = true
    false || true  = true
    false || false = false
    false || true  = true
*/

/*
Exemplos :
idade >= 15 && idade <= 17 // a idade está entre 15 e 17?

estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?

salário > 1500 && sexo != 'M' // o salário é maior que 1500 e não é pra homem?
*/