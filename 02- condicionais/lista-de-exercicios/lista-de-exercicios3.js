/* 3) Elabore um algoritimo que calcule o que deve ser pago por um protduto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os códigos da tabela a seguir para ler qual a condição de pagamento esoclhida e efetuar o cálculo adequado:
 Código Condição de pagamento:

 1 - Á vista Débito, recebe 10% de desconto;
 2 - Á vista no Dineheiro ou PIX, recebe 15% de desconto;
 3 - Em duas vezes. preço normal de etiqueta sem juros;
 4 - Acima de duas vezes,, preço normal de etiqueta mais juros de 10%;

 */


const precoDeEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    console.log(precoDeEtiqueta - (precoDeEtiqueta * 0.1));
} else if (formaDePagamento === 2){
    console.log (precoDeEtiqueta - (precoDeEtiqueta * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoDeEtiqueta)
} else {
    console.log (precoDeEtiqueta +(precoDeEtiqueta * 0.1) );
}









