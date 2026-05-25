import { createTimer, utils, animate } from 'https://esm.sh/animejs';

const [ $iterationTime ] = utils.$('.iteration-time');
const [ $currentTime ] = utils.$('.current-time');

// let loops = 0;

createTimer({
    // loop: true,
    // loopDelay: 750,
    duration: 10000,
    reversed: true,
    //frameRate: 250,
    //delay: 2000,
    // onLoop: () => $loops.innerHTML = ++loops,
    onUpdate: self => {
        $iterationTime.innerHTML = self.iterationCurrentTime;
        $currentTime.innerHTML = self.currentTime
    }
    // onLoop: self => $count.innerHTML = self.currentIteration
});