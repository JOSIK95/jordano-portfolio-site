const button = document.querySelector('button');
button.addEventListener('mouseover', () => {
    button.style.border = 'blue';
});
button.addEventListener('mouseout', () => {
    button.style.border = '';
});