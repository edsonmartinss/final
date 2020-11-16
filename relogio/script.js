function relogio(){
var horario = new Date(),
  horas = horario.getHours(),
  minutos = horario.getMinutes(),
  segundos = horario.getSeconds();
document.querySelectorAll('.relogio')[0].innerHTML = hora(horas) + ":" + hora(minutos) + ":" + hora(segundos);
function hora(sec){
  if (sec < 10){
    sec = '0' + sec;
  }
  return sec;
  }
}
setInterval(relogio, 1000);