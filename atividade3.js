let nome = "Alexandre"
let nomeUC = "beta"
let nota = Math.floor(Math.random() * 10)

function Grade(){
   if( nota<6){
   console.log("baixo Desempenho") 
}
else if(nota>=6 && nota <8)
{
   console.log("Bom desempenho")
}
else 
{
   console.log("Exelente desempenho")
}
}

Grade()

