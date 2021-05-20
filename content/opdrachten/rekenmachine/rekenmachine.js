function Reken(ingevuld){
document.getElementById("uitkomst").value += ingevuld;
}

function NerdMachine(){

var berekendit = document.getElementById('uitkomst').value;
document.getElementById("uitkomst").value = eval(berekendit);


}
function clearField(){

document.getElementById("uitkomst").value = "";

}

function play(){
	var audio = document.getElementById("audio");
  
  audio.play();
  }
  
  function play(){
	var audio = document.getElementById("audio");
  
  audio.play();
  }

  function buttonKlik(btn) {
	var value = btn.value.trim();
  
	if(value=='knopc') {
	  calculator.answer.value = '';
	}else if(value=='=') {
	  calculator.answer.value = eval(calculator.answer.value);
	}else{
	  calculator.answer.value += value;
	}
  }
  
  play();
