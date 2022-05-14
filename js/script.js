function readValue(val) {
  document.getElementById('display').value+=val; 

}

function backSpace() {
  var value = document.getElementById('display').value;
  document.getElementById('display').value = value.substr(0, value.length - 1); //alla lunghezza della stringa viene tolto -1 quando schiacci del
}

function deleteAll() {
  document.getElementById('display').value= ''; //se schiaccio 'C' la stringa diventa vuota perché ....value= niente;
}

function calculate () {
  var displayVal = document.getElementById('display').value;
  var operationArray = displayVal.split(' ');

  if(operationArray[1] == '+') {
    var result = +operationArray[0] + +operationArray[2];
  }

  if(operationArray[1] == '-') {
    var result = +operationArray[0] - +operationArray[2];
  }

  if(operationArray[1] == '*') {
    var result = +operationArray[0] * +operationArray[2];
  }

  if(operationArray[1] == '/') {
    var result = +operationArray[0] / +operationArray[2];
  }

  document.getElementById('display').value = result;
}