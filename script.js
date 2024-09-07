// random color = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'


const grid = document.querySelector('.grid');
const rainbow = document.querySelector('#rainbow');
const colors = document.querySelector('.colors');
const eraser = document.querySelector('#eraser');
const slider = document.querySelector('.gridSize');
const resetButton = document.querySelector('.reset')

let mouseDown = 0;
document.body.onmousedown = function() { 
    ++mouseDown;
  }
  document.body.onmouseup = function() {
    --mouseDown;
  }


function getGridElements(){
    const divsInGrid = document.querySelectorAll('.grid div');
    return divsInGrid;
}

function createDivs(input){

    for(let i = 0; i < input * input; i++){

        const newDiv = document.createElement('div');

        newDiv.style.height = 'auto';
        newDiv.style.width = 'auto';
        newDiv.style.minWidth = 400 / input + 'px';
        newDiv.style.minHeight = 400 / input + 'px';
        newDiv.style.flexGrow = '1';
        newDiv.addEventListener('mouseover', () =>{
            if(rainbow.checked == true && mouseDown == 1){
                newDiv.style.backgroundColor = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'
            }
            else if(eraser.checked == true && mouseDown == 1){
                newDiv.style.backgroundColor = 'white';
            }
            else if(mouseDown == 1){
                newDiv.style.backgroundColor = document.querySelector('.colorPick').value;
            }
        })


        grid.appendChild(newDiv);
    }

}

function eraseBoard(){
    getGridElements().forEach((element) => element.remove());
}

function checkboxesLogic(){

    if(rainbow.checked == true){
        colors.style.display = 'none';
        eraser.checked = false;
    }
    if(eraser.checked == true){
        colors.style.display = 'none';
        rainbow.checked = false;
    }
    if(eraser.checked == false && rainbow.checked == false) {
        colors.style.display = 'block';
    }
}


rainbow.addEventListener('click', ()=> {
    checkboxesLogic();
});
eraser.addEventListener('click', ()=> {
    checkboxesLogic();
});
slider.addEventListener('click', ()=> {
    eraseBoard();``
    createDivs(slider.value);
})
resetButton.addEventListener('click', ()=> {
    getGridElements().forEach((element) => element.style.backgroundColor = 'white')
})

document.body.addEventListener('mousedown', ()=>{
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
})

createDivs(50);