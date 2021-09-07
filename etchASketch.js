const sketchField = document.querySelector('#sketchField');
const resetButton = document.querySelector('#resetButton');


for(let i = 0;i < 1120; i++){
    const oneDiv = document.createElement('div');
    oneDiv.classList.add('oneDivStyle');
    oneDiv.addEventListener("mouseenter", function(){
        oneDiv.style.backgroundColor = 'black';
    }); 
    sketchField.appendChild(oneDiv);
}

const allDivs = document.querySelectorAll('.oneDivStyle');

resetButton.addEventListener('click',function(){
  allDivs.forEach(oneDiv => {
    oneDiv.style.backgroundColor = 'white';
  });
})


