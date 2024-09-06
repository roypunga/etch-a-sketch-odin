// random color = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'


const grid = document.querySelector('.grid');
const rainbow = document.querySelector('#rainbow')

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

//        newDiv.style.backgroundColor = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')';

        grid.appendChild(newDiv);
    }

}

function eraseBoard(){
    getGridElements().forEach((element) => element.remove());
}

function applySettings(){
    getGridElements().forEach((element) => {
        element.addEventListener('mouseover', () =>{
            if(rainbow.checked == true){
                element.style.backgroundColor = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'
            }
        })
    })
}