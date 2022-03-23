const container = document.querySelector(".container");

size = 16 * 16;
for(let i = 0 ; i < size; i++){
    const cell = document.createElement('div');
    cell.classList.toggle('cell');

    cell.addEventListener('mouseover',()=>{
        cell.style.backgroundColor = 'blue';
    })

    container.appendChild(cell);
}