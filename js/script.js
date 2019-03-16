var salutation="Hello ";
var user="friend, ";
var greeting=salutation+user+"are you ready to learn?";
//var to toggle paragraph content.
var x=true;


var greetingEl=document.getElementById('greeting');
greetingEl.textContent=greeting;

//homepage greeting complete

//changeGrids function

function changeGrids(){
  var el=document.getElementById('gridContainer');
  el.classList.toggle('gridContainer2');
}




function changePara(){
  el=document.getElementById('para');
  if(x===true){
    el.textContent="This grid has a two columns, both 50% of the width. Notice all of the grid items are always used.";
    x=false;
  }else{
    el.textContent="Here a 4 column grid is made, the first column is set at 10% the width the second column at 40% the width the third column at 10% the width and the fourth column is set at 40% the width as you can see in the grid. All of the grid items are used according to this pattern.";
    x=true;
  }
}
