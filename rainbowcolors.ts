//github crooruhe
// smooth transition across the rainbow, loops forever or you go over the integer limit
let colorArr = [255,0,0];
let indexCounter = 6; // starts at 6 for the initial modulas and elminates an if check for the first/initial loop

function translateToHex(): string {
    return '#' + colorArr.map(value => value.toString(16).padStart(2, '0')).join('');
}

function colorReturn(): string {
    // probably uncessary for any normal implementation but
    // if (indexCounter === 600){
    // indexCounter = 6;
    // }
    let tempcounter = (indexCounter) % 3;
    if (colorArr[tempcounter] == 255){
    if(colorArr[(indexCounter - 1) % 3] > 0){
        colorArr[(indexCounter - 1) % 3] -= 1;
        return translateToHex();
    }
    else indexCounter = indexCounter + 1;
    }
    else if (colorArr[(indexCounter) % 3] <= 254){
        colorArr[(indexCounter) % 3] += 1;
    return translateToHex();
    }
    return translateToHex();
}; 
