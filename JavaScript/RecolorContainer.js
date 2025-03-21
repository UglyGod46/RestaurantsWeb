const authBlock = document.querySelector('.auth_block');
const container = document.querySelector('.container');

authBlock.addEventListener('mouseover', () => {
    container.style.background = 'linear-gradient(to bottom right, blue, pink)';
});

authBlock.addEventListener('mouseout', () => {
    container.style.background = 'linear-gradient(to bottom right, pink, blue)';
});