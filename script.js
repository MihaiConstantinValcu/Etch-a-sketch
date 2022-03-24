const container = document.querySelector(".container");

let width = 400;
let height = 400;
let size = 16;

function generateGrid(){
    let cellHeight = height/size;
    let cellWidth = width/size;

    for(let i = 0 ; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
    
        cell.addEventListener('mouseover',()=>{
            console.log(cell.style.backgroundColor)
            if(cell.style.backgroundColor == ''){
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                cell.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
        })

        container.appendChild(cell);
    }
}

function deleteGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        container.removeChild(cell);
    })
}

function reset(){
    size = window.prompt("What size should the next grid be?", 16)
    console.log(size);
    if(size == '')
        size = 16;
    else size = parseInt(size);
    if(size > 100){
        size = 99;
    }
    deleteGrid();
    generateGrid();
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click',reset);

generateGrid();