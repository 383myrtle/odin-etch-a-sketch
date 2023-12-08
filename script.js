let div = document.querySelector('.container')
for (let i = 0; i < 256; i++){
    let block = document.createElement('div')
    block.classList.add('block')
    div.appendChild(block)
    block.addEventListener('mouseover', changeColor)
}

function changeColor(e){
    e.target.classList.add('blue')
}