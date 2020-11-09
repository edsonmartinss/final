var d4={
  lados:4,
  rolar:function(){
    var numeroAleatorio = Math.floor(Math.random()*this.lados)+1;
    return numeroAleatorio;
  }
}
function printNumber(numero){
  var num = document.getElementById('num');
  num.innerHTML = numero;
}
var botao = document.getElementById('d4');
botao.onclick = function(){
  var resultado = d4.rolar();
  printNumber(resultado);
}

var d6={
  lados:6,
  rolar:function(){
    var numeroAleatorio = Math.floor(Math.random()*this.lados)+1;
    return numeroAleatorio;
  }
}
function printNumber(numero){
  var num = document.getElementById('num');
  num.innerHTML = numero;
}
var botao = document.getElementById('d6');
botao.onclick = function(){
  var resultado = d6.rolar();
  printNumber(resultado);
}

var d8={
  lados:8,
  rolar:function(){
    var numeroAleatorio = Math.floor(Math.random()*this.lados)+1;
    return numeroAleatorio;
  }
}
function printNumber(numero){
  var num = document.getElementById('num');
  num.innerHTML = numero;
}
var botao = document.getElementById('d8');
botao.onclick = function(){
  var resultado = d8.rolar();
  printNumber(resultado);
}

var d10={
  lados:10,
  rolar:function(){
    var numeroAleatorio = Math.floor(Math.random()*this.lados)+1;
    return numeroAleatorio;
  }
}
function printNumber(numero){
  var num = document.getElementById('num');
  num.innerHTML = numero;
}
var botao = document.getElementById('d10');
botao.onclick = function(){
  var resultado = d10.rolar();
  printNumber(resultado);
}

var d12={
  lados:12,
  rolar:function(){
    var numeroAleatorio = Math.floor(Math.random()*this.lados)+1;
    return numeroAleatorio;
  }
}
function printNumber(numero){
  var num = document.getElementById('num');
  num.innerHTML = numero;
}
var botao = document.getElementById('d12');
botao.onclick = function(){
  var resultado = d12.rolar();
  printNumber(resultado);
}

var d20={
  lados:20,
  rolar:function(){
    var numeroAleatorio = Math.floor(Math.random()*this.lados)+1;
    return numeroAleatorio;
  }
}
function printNumber(numero){
  var num = document.getElementById('num');
  num.innerHTML = numero;
}
var botao = document.getElementById('d20');
botao.onclick = function(){
  var resultado = d20.rolar();
  printNumber(resultado);
}