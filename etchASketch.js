
function createField(pixel)
{
  let width_height = 800/pixel; 
  let width_height_string = width_height+"px";

for(let i = 0;i < pixel*pixel; i++){
  const oneDiv = document.createElement('div');
  oneDiv.classList.add('oneDivStyle');
  oneDiv.style.width = width_height_string;
  oneDiv.style.height = width_height_string;
  oneDiv.addEventListener("mouseenter", function(){
    if(draw == false && disable == false) oneDiv.style.backgroundColor = 'white';
    else if (draw == true && disable == false) oneDiv.style.backgroundColor = 'black';
  }); 
  sketchField.appendChild(oneDiv);
}}

function clearDivs(){
  const allDivs = document.querySelectorAll('.oneDivStyle');
  allDivs.forEach(oneDiv => {
    console.log(oneDiv);
    oneDiv.remove();
  });
  console.log("divs cleared");
}

const sketchField = document.querySelector('#sketchField');
const resetButton = document.querySelector('#resetButton');
const drawButton = document.querySelector('#drawButton');
const eraseButton = document.querySelector('#eraseButton');
const disableButton = document.querySelector('#disabledButton');


const rangeForNewField = document.querySelector("#newField");
const paraForRangeInd = document.querySelector('#indForNewField');
const createNewFieldButton = document.querySelector('#createNewField');



let draw = false, disable = false;

createField(16);
paraForRangeInd.textContent = rangeForNewField.value + "x" +rangeForNewField.value ;



resetButton.addEventListener('click',function(){
  const allDivs = document.querySelectorAll('.oneDivStyle');
  allDivs.forEach(oneDiv => {
    oneDiv.style.backgroundColor = 'white';
  });
});


drawButton.addEventListener('click',function(){ draw = true; });
eraseButton.addEventListener('click',function(){ draw = false; });
disableButton.addEventListener('click',function(){ disable = !disable; });

rangeForNewField.addEventListener('change', function(){
  paraForRangeInd.textContent = this.value + "x" +this.value ;
  });

  createNewFieldButton.addEventListener('click',function(){
  
    clearDivs(); 
    createField(rangeForNewField.value);
  });








