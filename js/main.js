import { animate, utils, createDraggable, spring } from 'animejs';

const [ $logo ] = utils.$('logo.js');
const [ $button ] = utils.$('button');
let rotations = 0;

//created bounce animation loop
animate('.logo.js', {
    scale: [
        { to: 1.25, ease: 'inOut(3)', duration: 200 },
        { to: 1, ease: spring({bounce: .7 })}
    ],
    loop: true,
    loopdelay: 250,
});

//Make the Logo draggable aorund its center
createDraggable('.logo.js', {
    container: [0, 0, 0, 0],
    releaseEase: spring({ bounce: .7 })
});

//Animate logo rotation on click
// when done through CDN there is some sort of err connection refused by client. but now with the npm it just doesn't work.
const rotateLogo = () => {
    rotations++;
    $button.innerText = `rotations: ${rotations}`;
    animate($logo, {
        rotate: rotations * 360,
        ease: 'out(4)',
        duration: 1500,
    });
}

$button.addEventListener('click', rotateLogo);