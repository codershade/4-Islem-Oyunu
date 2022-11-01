// global variables
 var number1,number2,operator,answer,result,True=0,False=0,timeleft=10,noti;
     
     number1=document.getElementById('Number1');
     number2=document.getElementById('Number2');
     operator=document.getElementById('Operator');
     answer=document.getElementById('answer');
     result=document.getElementById('result');
     True=document.getElementById('True');
     False=document.getElementById('False');
     unAnswered=document.getElementById('unAnswered');
     noti=document.getElementById('noti');

//function that creates a random number
    function randomNumber(min,max){
        var number=Math.floor(Math.random()*(min,max))+min;
        return number;
    }

//function that creates a new question 
    function newQuestion(){
        var operation=["+","-","*","/"];
        operator.textContent=operation[randomNumber(0,4)];
        number1.textContent=randomNumber(1,50);
        number2.textContent=randomNumber(1,50);
        if(operator.textContent=="*"){
            if(number1.textContent || number2.textContent>12){
                while(true){
                    number2.textContent=randomNumber(1,11);
                    if(number1.textContent || number2.textContent<11){
                        break;
                    }
                }
            }
          }
      if(operator.textContent=="/"){
        while(true){
            number2.textContent=randomNumber(1,50);
             if(number1.textContent%number2.textContent==0){
                break;
            }
        }
      }
      if(operator.textContent=="-"){
            while(true){
             number2.textContent=randomNumber(1,Number(number1.textContent));
                if(number2.textContent>=number1.textContent){
                    break;
                }
            }
        }
    }

// new question on load
    // window.onload=function(){
    //     newQuestion();
    // }
// evaluation on click

    answer.onclick=function(){
        var ans,n1,n2;
        n1=Number(number1.textContent);
        n2=Number(number2.textContent); 

        switch(operator.textContent){
            case "+":ans=n1+n2;break;
            case "-":ans=n1-n2;break;
            case "*":ans=n1*n2;break;
            case "/":ans=n1/n2;break;
            default:break;
        }
        if(result.value==ans){
            True.textContent=Number(True.textContent)+1;
            noti.textContent="Doğru!";
            noti.style.color = "lightgreen";
            timeleft=10;
        }
        else{
            False.textContent=Number(False.textContent)+1;
            noti.textContent="Yanlış!";
            noti.style.color = "red";
            timeleft=10;
        }
        newQuestion();
        document.getElementById('result').value="";
    }

    // countdown function
function countDown(){
    timeleft=10;
    var downloadTimer = setInterval(function(){
       
      if(timeleft <= 0){
        unAnswered.textContent=Number(unAnswered.textContent)+1;
        timeleft=10;
        downloadTimer;
        newQuestion();
        noti.textContent=" Boş!";
        noti.style.color = "lightgray";
      } else {
        document.getElementById("countdown").innerHTML = timeleft + " saniye kaldı!";
      }
      timeleft -= 1;
    }, 1000);
}
   // show the game window when pressed play button
function playFunc() {
    newQuestion();
    countDown();
    document.getElementById("game").style.display = "block";
    document.getElementById("play").style.display = "none";
  }

  // send the answer with clicking keyboard key(Enter)
  var input = document.getElementById("result");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("answer").click();
    }
  });