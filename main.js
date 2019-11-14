for(let i = 0; i < 1024; i++) {
    document.querySelector(".app").innerHTML += '<div></div>';
}

document.body.addEventListener('mouseover', event => {
    if(event.ctrlKey) {
        event.target.innerText = document.querySelector('#text-input').value
        let red = document.querySelector('.red').value;
        event.target.style.backgroundColor = 'rgb( '+ red +' , 0, 0,)';
        event.target.style.border = '1px dotted #f00';
    }

    if(event.altKey) {
        let green = document.querySelector('.green').value;
        event.target.style.backgroundColor = 'rbg( 0, '+ green +' , 0,)';
    }

    if(event.shiftKey) {
        let blue = document.querySelector('.blue').value;
        event.target.style.backgroundColor = 'rbg(0, 0, '+ blue +')';

    }

});

document.addEventListener('keydown', event => {
    if(event.key === 'r') {
    document.body.style.backgroundColor = '#0f0' ;
}
if(event.key === 's') {
    document.body.style.backgroundColor = '#f0f' ;
}
});

document.querySelector('.clear').addEventListener('click', event => {
    window.location = window.location; document.querySelectorAll('.app div') .forEach(element => {
    element.style = '';
    element.className = '';});
});