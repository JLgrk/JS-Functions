const para = document.createElement('p')
const button = document.querySelector('button');
const input = document.querySelector('input');
const boxA = document.querySelector('div.boxA');
const reset = document.createElement('input');
reset.setAttribute('type', 'reset');

button.onclick = function() {
   let newNumber = parseInt(input.value)+7;
  input.value = '';

  para.textContent = 'This is your number plus seven: ' + newNumber;

  boxA.appendChild(para);
  boxA.appendChild(reset);
  input.focus();
  reset.onclick = function() {
    boxA.removeChild(para);
    boxA.removeChild(reset);
  } 
}

const boxB = document.querySelector('div.boxB')
const buttonb = document.querySelector('#b')
const inputb = document.querySelector('#number1')
const inputbb = document.querySelector('#number2')


buttonb.onclick = function() {
  let newNumber;
  if (document.querySelector('#divide').checked == true) {
    newNumber = parseInt(inputb.value)/parseInt(inputbb.value);
    para.textContent = 'The result of your numbers is: ' + newNumber;

  } else if (document.querySelector('#multiply').checked == true) { 
    newNumber = parseInt(inputb.value)*parseInt(inputbb.value);
    para.textContent = 'The product of your numbers is: ' + newNumber;
  } else {
    para.textContent = "Please select which operation to execute.";
  }  
  boxB.appendChild(para);
      boxB.appendChild(reset);
      inputb.focus();
      reset.onclick = function() {
      boxB.removeChild(para);
      boxB.removeChild(reset);
      document.querySelector('input[name="multDiv"]:checked').checked = false;  
    }
  inputb.value = '';
  inputbb.value = '';

}

const boxC = document.querySelector('div.boxC')
const buttonc = document.querySelector('#c')
const inputc = document.querySelector('#sentence')

buttonc.onclick = function() {
  let sentence = inputc.value.toLowerCase()
  capSentence = (sentence.charAt(0).toUpperCase() + sentence.slice(1) +".");
  inputc.value = '';

  para.textContent = capSentence;

  boxC.appendChild(para);
  boxC.appendChild(reset);
  inputc.focus();
  reset.onclick = function() {
    boxC.removeChild(para);
    boxC.removeChild(reset);  
  }
  
}  


const boxD = document.querySelector('div.boxD')
const buttond = document.querySelector('#d')
const inputd = document.querySelector('#lastLetter')

buttond.onclick = function() {
  let lastLetter = inputd.value.slice(-1);
  inputd.value = '';

  para.textContent = lastLetter;

  boxD.appendChild(para);
  boxD.appendChild(reset);
  inputd.focus();
  reset.onclick = function() {
    boxD.removeChild(para);
    boxD.removeChild(reset);
  }
} 
const boxE = document.querySelector('div.boxE');
const buttone = document.querySelector('#e');
const para2 = document.createElement('p');

buttone.onclick = function() {
  const playerSelection = document.querySelector('input[name=rpc]:checked').value;
  const computerChoices = ['Rock','Paper','Scissors'];  
  let selection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  if (selection === playerSelection) {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "Tie! Try Again."
    boxE.appendChild(para2);
  } 
  else if  (selection == "Rock" && playerSelection == "Paper") {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "You win! Paper beats Rock."
    boxE.appendChild(para2);
  }
  else if  (selection == "Paper" && playerSelection == "Rock") {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "You lose! Paper beats Rock."
    boxE.appendChild(para2);
  }
  else if  (selection == "Paper" && playerSelection == "Scissors") {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "You win! Scissors beats Paper."
    boxE.appendChild(para2);
  }
  else if  (selection == "Rock" && playerSelection == "Scissors") {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "You lose! Rock beats Scissors."
    boxE.appendChild(para2);
  }
  else if  (selection == "Scissors" && playerSelection == "Paper") {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "You lose! Scissors beats Paper."
    boxE.appendChild(para2);
  }
  else if  (selection == "Scissors" && playerSelection == "Rock") {
    para.textContent = selection;
    boxE.appendChild(para);
    para2.textContent = "You win! Rock beats Scissors."
    boxE.appendChild(para2);
  }
  
  boxE.appendChild(reset);
  reset.onclick = function() {
    boxE.removeChild(para);
    boxE.removeChild(para2);
    boxE.removeChild(reset);
    document.querySelector('input[name="rpc"]:checked').checked = false;
  }
}  
