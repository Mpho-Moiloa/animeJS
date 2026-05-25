import { createTimer, utils } from 'https://esm.sh/animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
    loop: true,
    loopDelay: 750,
    duration: 250,
    //frameRate: 250,
    //delay: 2000,
    onLoop: () => $loops.innerHTML = ++$loops,
    onUpdate: self => $time.innerHTML = utils.clamp(self.iterationCurrentTime, 0, 250)
    // onLoop: self => $count.innerHTML = self.currentIteration
});