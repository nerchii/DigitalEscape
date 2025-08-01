// code for this effect:
// https://codepen.io/stywb/pen/poqPJvW

const chars = "Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ▓░";

var Glitch = function(selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch){
    this.selector = selector;
    this.index = index;
    this.numberOfGlitchedLetter = numberOfGlitchedLetter;
    this.innerText;
    this.charArray = [];
    this.charIndex = [];
    this.timeGlitch = timeGlitch;
    this.timeBetweenGlitch = timeBetweenGlitch;
    this.timePerLetter = timePerLetter;
    this.maxCount = Math.floor(this.timeGlitch/this.timePerLetter);
    this.count = 0;
}

Glitch.prototype.init = function(){
    this.innerText = this.selector.innerText;
    this.charArray = this.innerText.split("");
    if(this.numberOfGlitchedLetter == undefined || this.numberOfGlitchedLetter > this.innerText.length){
        this.numberOfGlitchedLetter = this.innerText.length;
    }
    this.defineCharIndexToRandomize();
}

Glitch.prototype.defineCharIndexToRandomize = function(){
    this.charIndex = [];
    for(let i=0; i<this.numberOfGlitchedLetter; i++){
        let randCharIndex = Math.floor(Math.random() * this.charArray.length);
        this.charIndex.push(randCharIndex);
    }
}

Glitch.prototype.randomize = function(){
    //copy the char array
    let randomString = Array.from(this.charArray);

    //randomize char
    for(let i=0; i<this.numberOfGlitchedLetter; i++){
        let randIndex = Math.floor(Math.random() * chars.length);
        let randCharIndex = this.charIndex[i];
        if(randomString[randCharIndex] !== ' '){
            randomString[randCharIndex] = chars[randIndex];
        }
    }
    this.selector.innerText = randomString.join("");
}

Glitch.prototype.update = function(interval){
    if(this.count >= this.maxCount - 1){
        this.selector.innerText = this.innerText;
        this.defineCharIndexToRandomize();
        let ctx = this;
        let wait = setTimeout(function(){
            ctx.count = 0;
        }, this.timeBetweenGlitch);
    }else{
        this.randomize();
        this.count ++;
    }
}

Glitch.prototype.glitch = function(){
    let ctx = this;
    let interval= setInterval(function(){
        ctx.update(this);
    },this.timePerLetter);
}

var arrayElements;
var glitchArray = [];

function initAllGlitch(){
    arrayElements = document.querySelectorAll(".content");
    for(let i=0; i<arrayElements.length; i++){
        let selector = arrayElements[i];
        let randLetterNumber = 2 + Math.floor(Math.random() * 8);
        let randGlitchTime = 500 + Math.floor(Math.random() * 2500);
        let randGlitchPauseTime = 500 + Math.floor(Math.random() * 2500);
        let glitch = new Glitch(selector, i, randLetterNumber, 200, 65, randGlitchPauseTime);
        glitch.init();
        glitchArray.push(glitch);
    }
}


function update(){
    for(let i=0; i<glitchArray.length; i++){
        let glitch = glitchArray[i];
        glitch.glitch();
    }
}

initAllGlitch();
update();