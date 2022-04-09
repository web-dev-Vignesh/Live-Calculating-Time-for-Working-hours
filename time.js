window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('pause');
  var buttonReset = document.getElementById('reset');
  var Interval ;

  buttonStart.onclick = function() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
     document.getElementById("start-time").innerHTML = "Start Time: "+seconds+":"+tens;
  }
  
  buttonStop.onclick = function() {
       clearInterval(Interval);
       document.getElementById("pause-time").innerHTML ="Pause Time: "+ seconds+":"+tens;
  }
  

  buttonReset.onclick = function() {
    
     clearInterval(Interval);
     document.getElementById("reset-time").innerHTML = "Interval: "+seconds+":"+tens;
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;

  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  
}