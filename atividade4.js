let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let soma = num1 + num2

function somaNum(){
   if (soma<= 100){
      console.log("resultado invalido ");
   
   }
   else{
      console.log("O resultado foi:" , soma)
   }
}

somaNum()