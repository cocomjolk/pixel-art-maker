window.onload = function(){
myCode();
}

//default color black.
let paint = 'black';
//color palette
let colors = ['red','orange','yellow','purple','blue','aqua','lime'];

function myCode(){

  //fetching element by ID
  let canvas = document.getElementById('canvas');
  let palette = document.getElementById('palette');

  // create grid
  for (let i = 0; i < 1200 ; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    canvas.append(square);
  }

  //create color palette
  for (let i = 0; i < colors.length; i++) {
    //creating div, declaring color var to reference and use it.
    let color = document.createElement('div');
    //adding classname class="colorArr" to div so we can use to format
    color.classList.add('colorArr');
    //appending child element(color) to <div>"palette"</div>
    palette.append(color);
    //assigning style="backgroundColor" to <div>"colorArr"</div>
    color.style.backgroundColor = colors[i];
  }
  //painting square
  canvas.addEventListener('click', function(el){
    //targets element from <div id="canvas">
    el.target.style.backgroundColor = paint;
  });

  //getting color from palette
  palette.addEventListener('click', function(el){
    paint = el.target.style.backgroundColor;
    //displaying picked color
    currentColor.style.backgroundColor = paint;
  });

  //box showing current color
  let currentColor = document.createElement('div');
  currentColor.classList.add('pickedColor');
  palette.append(currentColor);
  currentColor.style.backgroundColor = paint;

  //attempt to put text in palette.
  // let heading = document.createElement('h2');
  // palette.append(heading);

}
