const heading = document.querySelector('#page-title');

const keyframes = {
    opacity: [0, 1],
    translate: ['0 100px', 0],
};
const options = {
    duration: 2000,
    easing: 'ease',
    iteration: Infinity,
};

heading.animate(keyframes, options);