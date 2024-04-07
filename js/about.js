const heading = document.querySelectorAll('.h2-title');

const keyframes = {
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};

const options = {
    duration: 5000,
    easing: 'ease',
    iterations: Infinity,
};

heading.forEach(heading => {
    heading.animate(keyframes, options);
});