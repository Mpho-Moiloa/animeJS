import { createTimer, utils } from 'https://esm.sh/animejs';

const [ $time, $count] = utils.$('.value');

createTimer({
    duration: 2000,
    // loop: true,
    frameRate: 30,
    delay: 2000,
    onUpdate: self => $time.innerHTML = self.currentTime,
    // onLoop: self => $count.innerHTML = self.currentIteration
});