function timeToWalk(steps, footprint, speed) {
    let distanceInM = steps * footprint;
    let mInSeconds = speed / 3.6;
    let time = distanceInM / mInSeconds;
    let rest = Math.floor(distanceInM / 500);
    
    let timeInMins = Math.floor(time / 60);
    let timeInSec = Math.ceil(time - timeInMins * 60);
    timeInMins += rest;
    
    let timeInHours = Math.floor(timeInMins / 60);
    timeInMins = timeInMins % 60
    
    let hoursToPrint = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let minToPrint = timeInMins < 10 ? `0${timeInMins}` : `${timeInMins}`;
    
    console.log(`${hoursToPrint}:${minToPrint}:${timeInSec}`);
    
}
timeToWalk(4000, 0.60, 5);
timeToWalk(8000, 0.60, 5);