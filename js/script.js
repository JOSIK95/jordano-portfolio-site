const button = document.querySelector('button');
button.addEventListener('mouseover', () => {
    button.classList.add = 'button-hover';

});
button.addEventListener('mouseout', () => {
    button.classList.remove = 'button-hover';
});