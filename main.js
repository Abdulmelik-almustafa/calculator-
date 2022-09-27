let mybtn = document.querySelectorAll('.my-btn');
let myinput =document.querySelector('.number');
let deletBtn =document.querySelector('.delet');
let equal = document.querySelector('.equal');


mybtn.forEach(function(e){
  e.addEventListener('click' , function(){
    myinput.value += e.dataset.num;
    
  })
});

deletBtn.addEventListener('click', function(){
  myinput.value='';
} )


equal.addEventListener('click', function(){
  if (myinput.value == '') {
    myinput.value ='';
  }else {
    myinput.value=eval(myinput.value);
  }
})
