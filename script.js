// random color = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'


const grid = document.querySelector('.grid');
const rainbow = document.querySelector('#rainbow');
const colors = document.querySelector('.colors');
const eraser = document.querySelector('#eraser');
const slider = document.querySelector('.gridSize');
const resetButton = document.querySelector('.reset')

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
            if(rainbow.checked == true){
                newDiv.style.backgroundColor = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'
            }
            else if(eraser.checked == true){
                newDiv.style.backgroundColor = 'white';
            }
            else {
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

createDivs(50);