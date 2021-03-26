
let frutas = [];
frutas.push("Banana", "Laranja",  "Manga", "Abacate");

//--------------------------------------- FOR 1 ---------------------------------------------
console.log("\nFor 1");
for(x in frutas)
    console.log(frutas[x]);


//--------------------------------------- FOR 2 ---------------------------------------------
console.log("\nFor 2");
for (x of frutas)
    console.log(x);


//---------------------------------------FOR 3 ---------------------------------------------
console.log("\nFor 3");
for(let i=0; i < frutas.length; i++)
{
    let fruta = frutas[i];
    console.log(fruta)
}



//---------------------------------------FOREACH ---------------------------------------------
console.log("\nForEach");

frutas.forEach(EachPrint)

function EachPrint(index, item){
    console.log(index, item)
}


//--------------------------------------- COMENTADOS ---------------------------------------------

//for(let i=0; i<=10; i++)
//    console.log("Hello Word -- "+i+"");



//let pessoas = [nome=[], idade=[], genero=[]];
//pessoas[0].push("Joao");
//pessoas[1].push(21);
//pessoas[2].push("m");
//console.log(pessoas);
//console.log(pessoas[0][0]+" "+pessoas[1][0]+" "+pessoas[2][0]);


