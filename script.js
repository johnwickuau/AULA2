function soma(){
    const num1 = parseFloat(document.getElementById("num1-soma").value);
    const num2 = parseFloat(document.getElementById("num2-soma").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").textContent = "O resultado da soma é: " + resultado;
}

function menos(){
    const num1 = parseFloat(document.getElementById("num1-sub").value);
    const num2 = parseFloat(document.getElementById("num2-sub").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").textContent = "O resultado da subtração é: " + resultado;
}

function mult(){
    const num1 = parseFloat(document.getElementById("num1-mult").value);
    const num2 = parseFloat(document.getElementById("num2-mult").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").textContent = "O resultado da multiplicação é: " + resultado;
}

function div(){
    const num1 = parseFloat(document.getElementById("num1-div").value);
    const num2 = parseFloat(document.getElementById("num2-div").value);
    const resultado = num1 / num2;
    document.getElementById("resultado").textContent = "O resultado da divisão é: " + resultado;
}

function areatriangulo(){
    const base = parseFloat(document.getElementById("base-triangulo").value);
    const altura = parseFloat(document.getElementById("altura-triangulo").value);
    const resultado = (base * altura) / 2;
    document.getElementById("resultado").textContent = "A área do triângulo é: " + resultado;
}

function quadrado(){
    const lado = parseFloat(document.getElementById("lado-quadrado").value);
    const resultado = lado * lado;
    document.getElementById("resultado").textContent = "A área do quadrado é: " + resultado;
}

function retangulo(){
    const base = parseFloat(document.getElementById("base-retangulo").value);
    const altura = parseFloat(document.getElementById("altura-retangulo").value);
    const resultado = base * altura;
    document.getElementById("resultado").textContent = "A área do retângulo é: " + resultado;
}

function trapezio(){
    const baseMaior = parseFloat(document.getElementById("base-maior-trapezio").value);
    const baseMenor = parseFloat(document.getElementById("base-menor-trapezio").value);
    const altura = parseFloat(document.getElementById("altura-trapezio").value);
    const resultado = ((baseMaior + baseMenor) * altura) / 2;
    document.getElementById("resultado").textContent = "A área do trapézio é: " + resultado;
}

function losango(){
    const diagonalMaior = parseFloat(document.getElementById("diagonal-maior-losango").value);
    const diagonalMenor = parseFloat(document.getElementById("diagonal-menor-losango").value);
    const resultado = (diagonalMaior * diagonalMenor) / 2;
    document.getElementById("resultado").textContent = "A área do losango é: " + resultado;
}

function círculo(){
    const raio = parseFloat(document.getElementById("raio-circulo").value);
    const resultado = Math.PI * Math.pow(raio, 2);
    document.getElementById("resultado").textContent = "A área do círculo é: " + resultado.toFixed(2);
}


function setorcircular(){
    const raio = parseFloat(document.getElementById("raio-setor").value);
    const angulo = parseFloat(document.getElementById("angulo-setor").value);
    const resultado = (Math.PI * Math.pow(raio, 2) * angulo) / 360;
    document.getElementById("resultado").textContent = "A área do setor circular é: " + resultado.toFixed(2);
}

function coroacircular(){
    const raiomaior = parseFloat(document.getElementById("raio-maior-coroa").value);
    const raiomenor = parseFloat(document.getElementById("raio-menor-coroa").value);
    const resultado = Math.PI * (Math.pow(raiomaior, 2) - Math.pow(raiomenor, 2));
    document.getElementById("resultado").textContent = "A área da coroa circular é: " + resultado.toFixed(2);
}

function elipse(){
    const raioMaior = parseFloat(document.getElementById("raio-maior-elipse").value);
    const raioMenor = parseFloat(document.getElementById("raio-menor-elipse").value);
    const resultado = Math.PI * raioMaior * raioMenor;
    document.getElementById("resultado").textContent = "A área da elipse é: " + resultado.toFixed(2);
}

function paralelogramo(){
    const base = parseFloat(document.getElementById("base-paralelogramo").value);
    const altura = parseFloat(document.getElementById("altura-paralelogramo").value);
    const resultado = base * altura;
    document.getElementById("resultado").textContent = "A área do paralelogramo é: " + resultado;
}

function poligonoregular(){
    const apotema = parseFloat(document.getElementById("apotema-poligono").value);
    const perimetro = parseFloat(document.getElementById("perimetro-poligono").value);
    const resultado = (apotema * perimetro) / 2;
    document.getElementById("resultado").textContent = "A área do polígono regular é: " + resultado;
}

// Quadrado,retangulo,triângulo,trapézio,círculo,paralelogramo,losango,setor,circular,coroa sircular,elipse, poligono regular
