(function () {
  const timer = document.querySelector('#counter');
  const upper_count = document.querySelector('#U-C');
  const bothbuttons = document.querySelector('#both_buttons');
  let counter = 0;
  bothbuttons.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.id === upper_count.id){
      counter++;
    }
    else{
     counter--;
    }
    timer.textContent = counter;


    if(counter<0){
      timer.style.color = "red";
    }
    else if(counter > 0){
      timer.style.color = "#2bff00";
    }
    else 
    {
      timer.style.color = "black"
    }
    
  })
  
})()
