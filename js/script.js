let container = document.querySelector('.container');

container.style.display = 'none';


document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    if(container.style.display === 'none'){
        container.style.left = event.pageX + 'px';
        container.style.top = event.pageY + 'px';
        container.style.display = 'block';
    }else{
        container.style.left = event.pageX + 'px';
        container.style.top = event.pageY + 'px';
    }
});

document.body.addEventListener('click', () => {
    container.style.display = 'none';
});

document.body.addEventListener('keydown', (event) => {
    if(event.keyCode === 27){
        container.style.display = 'none';
    }
    
});

