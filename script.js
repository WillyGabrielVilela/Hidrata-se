//Jovem ativo até os 17 anos	
//40 ml por cada kg
//18 a 55 anos
//35 ml por cada kg
//55 a 65 anos
//30 ml por cada kg
//Mais de 66 anos
//25 ml  por cada kg

let inputIdade = document.getElementById("idade")
let inputQuilos = document.getElementById("quilos")


let = resultado = document.getElementById("resultado")

function calcular() {
  console.log("");

    let quilos = inputQuilos.value;
    let idade = inputIdade.value;

    

    let qtdTotalAgua = idadecalculo(idade) * quilos;

    resultado.innerHTML = `<p>Você deve beber <b> ${qtdTotalAgua/1000} Litros</b> de água por dia. </p>`
    resultado.innerHTML += `<p> Você como tem <b> ${idade} anos </b> de idade, deve consumir <b> ${idadecalculo(idade)}ml de água por quilo corporal por dia.</b>`

    function idadecalculo(idade){
        if (idade <= 17){
            return 40;
            
        }else if
            (idade <= 55){
                return 35;
                
        } else if
                (idade <= 65){
                return 30;
                
            } else{
            (idade => 66)
            return 25;
            } 
    
        }
}


