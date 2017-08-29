//if use, need to make sure it's referenced.

window.onload = function(){
myCode();
}

//we want to create an event listener so when we
//click on a square it runs a function that will
//color that square, whatever color we have chosen.



//event listener from practice tutorial
window.addEventListener("click", function() {
  alert("You clicked on the page!");
});

var button = document.querySelector("button");

button.addEventListener("click", function(){
  alert("SOMEONE CLICKED THE BUTTON!!");
});


function myCode(){
  console.log('test');
  //referencing the first <body> tag in this function
  let container = document.getElementsByTagName('body')[0];
  //with 10x10px 3016
  for (var i = 0; i < 24 ; i++) {
    //createElement <div> in the <body> in the DOM
    let square = document.createElement('div');
    //calling decorateSquare function to format grid
    decorateSquare(square, 'white');
    //adding it to the DOM
    container.append(square)
  }
}

//sizing the grid
function decorateSquare(sq, color){
  sq.style.width = '100px'
  sq.style.height = "100px"
  sq.style.backgroundColor = color
  sq.style.float = 'left'
  sq.style.border = '1px solid black'
}
