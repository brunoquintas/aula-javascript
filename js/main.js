

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://twitter.com/home");
    //window.location.href = "https://twitter.com/home"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

alert(soma(5, 10));
console.log(validaIdade(prompt("Qual sua idade")));*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*
var count;
for(count=5; count >=0; count--){
    alert(count);
}*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};*/


/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/

/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));


//var nome = "Bruno Quintas";
//var n1 = 5;
//var n2 = 3
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"))