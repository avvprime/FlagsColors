
import "./howler.min.js";

import gameloop from "./game-loop.js";
import flags from "./flags-data.js";




const line = {
    new: function(x0, y0, x1, y1){
        return {from: {x: x0, y: y0}, to: {x: x1, y: y1}};
    }
}

const flagBtn = {
    new: function(domEl, connectedDomEl, groupName, idx){
        const rect = domEl.getBoundingClientRect();
        return { 
            domEl: domEl,
            connectedDomEl: connectedDomEl || undefined,
            group: groupName,
            idx: idx,
            pressed: false,
            connected: false,
            satisfied: false,
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
            line: undefined,
            connect: function(targetDomEl){
                this.connectedDomEl = targetDomEl;
        
                const color = targetDomEl.getAttribute('data-color');

                this.domEl.classList.add('cd'); // to add radius to button element
                this.domEl.style.backgroundColor = color;
                this.pressed = false;
                this.connected = true;

                this.updatePositions();

                const elements = groupElements[this.group];

                
                for (let i = 0; i < elements.fills.length; i++){
                    elements.fills[i].style.fill = color;
                }

                for (let i = 0; i < elements.strokes.length; i++){
                    elements.strokes[i].style.stroke = color;
                }

                if (currentFlag.colorGroups[this.idx].trueColor === color) this.satisfied = true;

            },
            disconnect: function(){
                this.connectedDomEl = undefined;
                this.domEl.classList.remove('cd');
                this.domEl.style.backgroundColor = "#ffffff";
                this.connected = false;
                this.satisfied = false;

                const color = currentFlag.colorGroups[this.idx].defaultColor;

                const elements = groupElements[this.group];
                for (let i = 0; i < elements.fills.length; i++){
                    elements.fills[i].style.fill = color;
                }

                for (let i = 0; i < elements.strokes.length; i++){
                    elements.strokes[i].style.stroke = color;
                }

            },
            updatePositions: function(){
                const rect = this.domEl.getBoundingClientRect();
                
                this.x = rect.x + rect.width / 2;
                this.y = rect.y + rect.height / 2;

                if (this.line === undefined) return;

                this.line.from.x = this.x;
                this.line.from.y = this.y;

                if (this.connectedDomEl === undefined) return;
                
                const targetRect = this.connectedDomEl.getBoundingClientRect();
                this.line.to.x = targetRect.x + targetRect.width / 2;
                this.line.to.y = targetRect.y + targetRect.height / 2;
            }
        };
    }
}
// Sound variable to hold sounds with howler
let sound = undefined;
let isSfxEnabled   = true;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const scale = window.devicePixelRatio;



const flagContainer     = document.querySelector('.flag-container .svg-container');
const flagBtnContainer  = document.getElementsByClassName('flag-button-container')[0];
const colorBtnContainer = document.getElementsByClassName('color-button-container')[0];
const timerProgressBar  = document.querySelector('.time-progress-bar-container .bar');
const countryNameLabel  = document.getElementsByClassName('country-name-container')[0];

const confirmPopUp      = document.getElementById('confirm-popup');
const confirmYesBtn     = confirmPopUp.querySelector('.yes');
const confirmNoBtn      = confirmPopUp.querySelector('.no');

const menuScene         = document.getElementById('menu-scene');
const optionsContainer  = document.querySelector('.options-container');

const winScene          = document.getElementById('win-scene');
const finishScene       = document.getElementById('finish-scene');
const failScene         = document.getElementById('fail-scene');
const transitionScene   = document.getElementById('transition-scene');

const flagRevealBtn     = document.getElementById('flag-reveal-btn');
const flagRevealPopUp   = document.getElementById('flag-reveal-popup');
const flagRevealTimeBar = flagRevealPopUp.querySelector('.time-bar');
const flagRevealContent = flagRevealPopUp.querySelector('.container');

const passWithAdBtn     = document.getElementById('pass-with-ad-btn');

const totalLevels = flags.length;
let maxReachedLevel = 1;
let currentLevel = 1;
let currentFlag  = flags[currentLevel - 1];

// to keep time
let acc = 0;
let time = 0;

// to advertising time
let adTime = 0;
const interstitialAdTime = 300; // in seconds = 5 min

// keep track timer bar percentage
let barPercentage = 100;

// reset each level, exists because you want to operate on that level's flag buttons
let flagButtons = [];


/*
 reset each level
 exists because you organized elements to colors then fill / stroke
*/
let groupElements = {
    A: {
        strokes: [],
        fills: [] 
    },
    B: {
        strokes: [],
        fills: [] 
    },
    C: {
        strokes: [],
        fills: [] 
    },
    D: {
        strokes: [],
        fills: [] 
    },
    E: {
        strokes: [],
        fills: [] 
    },
    F: {
        strokes: [],
        fills: [] 
    },
}
// to draw line from that button to pointer position
let pressedFlagButton = undefined;
let isPointerDown = false;


/*
0 idle
1 pause
2 win
3 fail
*/
let gameStatus = 1;

// in pixels, for grid background
const unitSize = 50;
let rowCount = canvas.height / unitSize;
let colCount = canvas.width / unitSize;

// if its first time show tutorial hand
let isFirstTime = true;
const tutorialElements = document.getElementById('tutorial-elements');

let gameFinished = false;


const userData = {
    isFirst: isFirstTime,
    gameFinished: gameFinished,
    currentLevel: currentLevel,
    maxReachedLevel: maxReachedLevel,
    sound: isSfxEnabled
}

function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUserAgent = /android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMobileScreenSize = window.matchMedia("(max-width: 767px)").matches;

    return isMobileUserAgent || isMobileScreenSize;
}

function onWindowResize(){
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;

    ctx.scale(scale, scale);

    for (let i = 0; i < flagButtons.length; i++) {
        flagButtons[i].updatePositions();
    }

    rowCount = canvas.height / unitSize;
    colCount = canvas.width / unitSize;
}

function onPointerDown(e){
    if (e.target.classList.contains('fb')) {
        const flagBtn = flagButtons[e.target.getAttribute('data-idx')];
        flagBtn.line = line.new(flagBtn.x, flagBtn.y, flagBtn.x, flagBtn.y);
        flagBtn.disconnect();
        flagBtn.pressed = true;
        pressedFlagButton = flagBtn;
        e.target.classList.add('ac'); // active
    }

    isPointerDown = true;
}

function onPointerMove(e){
    if (!isPointerDown) return;

    if (pressedFlagButton === undefined) return; 

    pressedFlagButton.line.to.x = e.clientX;
    pressedFlagButton.line.to.y = e.clientY;

    
    if (!e.target.classList.contains('cb')) return;

    e.target.classList.add('cd'); // connected -> cd
    setTimeout(() => {
        e.target.classList.remove('cd');
    }, 200);
    sound.play("fBtnConnect");
    pressedFlagButton.connect(e.target);
    pressedFlagButton = undefined;
    isPointerDown = false;
    checkWin();

}

function onPointerUp(e){
    if (pressedFlagButton){
        pressedFlagButton.pressed = false;
        pressedFlagButton.domEl.classList.remove('ac');
    }
    isPointerDown = false;
    pressedFlagButton = undefined;
}


function checkWin(){
    const length = flagButtons.length;
    let count = 0;

    for (let i = 0; i < length; i++){
        if (flagButtons[i].satisfied) count++;
    }

    if (count !== length) return;

    // wait to last work done like connecting line to button etc to change game status, cuz draw func will stop 
    setTimeout(() => {
        gameStatus = 2; 
        // cg
        
    }, 100);

    sound.play("flagAssemble");
    flagContainer.classList.add('win');

    setTimeout(() => {
        if (gameFinished) return;

        winScene.classList.add('show');
        if (adTime < interstitialAdTime) sound.play("sucess");

    }, 700);

    if (currentLevel === totalLevels){
        finishGame();
        return;
    }

    currentLevel++;

    if (currentLevel > maxReachedLevel) maxReachedLevel = currentLevel;
    currentFlag = flags[currentLevel - 1];

    if (adTime > interstitialAdTime) showInterstitialAd();

    userData.currentLevel = currentLevel;
    userData.maxReachedLevel = maxReachedLevel;
    saveUserData("maxReachedLevel", maxReachedLevel);

    if (isFirstTime){
        isFirstTime = false;
        tutorialElements.classList.remove('show');
        saveUserData("isFirstTime", false);
    }
}

function finishGame(){
    console.log("you finished game congrats");
    gameFinished = true;
    
    setTimeout(() => {
        finishScene.classList.add('show');
        sound.play("sucess"); 
    }, 500);

    userData.gameFinished = gameFinished;
    saveUserData("gameFinished", true);
}

function resetVariables(){
    flagButtons = [];
    groupElements = {
        "A": [],
        "B": [],
        "C": [],
        "D": [],
        "E": [],
        "F": []
    }
}

function setCountdownTimer(){
    barPercentage = 100;
    time = 0;
}

function setCountryName(){
    const length = currentFlag.countryName.length;

    if (length < 11) countryNameLabel.style.fontSize = '40px';
        
    else if (length > 10 && length < 16) countryNameLabel.style.fontSize = '24px';

    else if (length > 15 && length < 20) countryNameLabel.style.fontSize = '20px';

    else if (length > 19 && length < 23) countryNameLabel.style.fontSize = '16px';

    else if (length > 22 && length < 26) countryNameLabel.style.fontSize = '14px';

    else if (length > 25 && length < 35) countryNameLabel.style.fontSize = '10px';

    countryNameLabel.innerText = currentFlag.countryName;
}

function generateFlag(){
    flagContainer.innerHTML = currentFlag.svg;
    
    for (let i = 0; i < currentFlag.colorGroups.length; i++) {
        const group = currentFlag.colorGroups[i]
        
        const elements = flagContainer.getElementsByClassName(group.name);

        const strokes = [];
        const fills   = [];

        for (let j = 0; j < elements.length; j++) {
            const el = elements[j];
            
            const fill = el.getAttribute('data-fill');
            const stroke = el.getAttribute('data-stroke');

            if (fill !== null && fill === group.name){
                fills.push(el);
                el.style.fill = group.defaultColor;
            }
            else if (stroke !== null && stroke === group.name) {
                strokes.push(el);
                el.style.stroke = group.defaultColor;
            }
        }

        groupElements[group.name].strokes = strokes;
        groupElements[group.name].fills   = fills;
    }
    
}

function generateFlagButtons(){
    flagBtnContainer.innerHTML = '';

    for (let i = 0; i < currentFlag.colorGroups.length; i++){
        const group = currentFlag.colorGroups[i];

        const btn = document.createElement('button');
        btn.classList.add('fb');
        btn.classList.add(group.name);
        btn.classList.add('ease-3');
        btn.setAttribute('data-idx', i);
        flagBtnContainer.appendChild(btn);
        flagButtons.push(flagBtn.new(btn, undefined, group.name, i));
    }
}

function generateColorButtons(){
    colorBtnContainer.innerHTML = '';

    for (let i = 0; i < currentFlag.colors.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('cb');
        btn.classList.add('ease-3')
        btn.setAttribute('data-color', currentFlag.colors[i]);
        btn.style.backgroundColor = currentFlag.colors[i];
        colorBtnContainer.appendChild(btn);
    }
}

function generateLevel(){
    resetVariables();
    generateFlag();
    generateFlagButtons();
    generateColorButtons();
    setCountryName();
    setCountdownTimer();
    for (let i = 0; i < flagButtons.length; i++) flagButtons[i].updatePositions();
    flagRevealContent.innerHTML = currentFlag.svg;

    if (currentLevel === totalLevels) passWithAdBtn.style.display = 'none';
}


function update(dt){


}


function draw(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#34a8eb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#1a5577";
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 5])

    for (let c = 0; c < colCount; c++){
        ctx.beginPath();
        ctx.moveTo(c * unitSize, 0);
        ctx.lineTo(c * unitSize, canvas.height);
        ctx.stroke();
    }

    for (let r = 0; r < rowCount; r++){
        ctx.beginPath();
        ctx.moveTo(0, r * unitSize);
        ctx.lineTo(canvas.width, r * unitSize);
        ctx.stroke();

    }
    
    if (gameStatus !== 0) return; 

    ctx.strokeStyle = "#1a5577";
    ctx.lineWidth = 3;
    ctx.setLineDash([20, 5]);

    for (let i = 0; i < flagButtons.length; i++){
        const button = flagButtons[i];

        if (button.pressed){
            ctx.setLineDash([10, 5]);
        }
        else{
            ctx.setLineDash([])
        }

        if (!(button.connected || button.pressed)) continue;
   
        ctx.beginPath();
        ctx.moveTo(button.line.from.x, button.line.from.y);
        ctx.lineTo(button.line.to.x, button.line.to.y);
        ctx.stroke();
    }

    // set to 100 sec
    timerProgressBar.style.width = barPercentage + '%';
    barPercentage -= 0.013882;
    
    // keep time
    acc += 0.016666;
    if (acc > 1.0) {
        time++;
        adTime++;
        acc = 0;
    }

    if (time < 100) return;

    // failed
    sound.play("levelFail");

    if (adTime > interstitialAdTime){
        showInterstitialAd();
    }

    failScene.classList.add('show');

    if (gameStatus === 0) gameStatus = 3;

    // cg
    
}


function showInterstitialAd(){
    adTime = 0;
    //cg
    
}

function showRewardedAd(){
    gameStatus = 1;
    adTime = 0;
    // cg
    

    giveReward();
}

function giveReward(){
    currentLevel++;
    if (currentLevel > maxReachedLevel) maxReachedLevel = currentLevel;
    userData.currentLevel = currentLevel;
    userData.maxReachedLevel = maxReachedLevel;
    saveUserData("maxReachedLevel", maxReachedLevel);
    currentFlag = flags[currentLevel - 1];
    transitionScene.classList.add('show');
    flagRevealBtn.classList.remove('disabled');
    setTimeout(() => {
        flagContainer.classList.remove('win');        
        generateLevel();
    }, 300);

    setTimeout(() => {
        transitionScene.classList.remove('show');
        gameStatus = 0;
    }, 1000);
}


function addEventListeners(){

    window.addEventListener('resize', onWindowResize);
    // prevent scroll
    window.addEventListener("wheel", (event) => event.preventDefault(), {
        passive: false,
    });
    
    window.addEventListener("keydown", (event) => {
        if (["ArrowUp", "ArrowDown", " "].includes(event.key)) {
            event.preventDefault();
        }
    });

    if(isMobile()){
        document.addEventListener('touchstart', function(e) {
            onPointerDown(e.changedTouches[0]);
        });
        document.addEventListener('touchmove', function(e) {
            const touch = e.changedTouches[0];
            const target = document.elementsFromPoint(touch.clientX, touch.clientY)[0];
            onPointerMove({target: target, clientX: touch.clientX, clientY: touch.clientY});
        });
        document.addEventListener('touchend', function(e) {
            onPointerUp(e.changedTouches[0]);
        });
    }

    else{
        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('mousemove', onPointerMove);
        document.addEventListener('mouseup', onPointerUp);
    }

    // Menu button pressed
    document.getElementById('menu-btn').addEventListener('click', function(){
        gameStatus = 1; // pause
        sound.play("pauseBtnPress");
        menuScene.classList.add('p');
        menuScene.classList.add('show');
        // cg
        

    });
    // Play button pressed
    document.getElementById('play-btn').addEventListener('click', function(){
        sound.play("uBtnPress");
        if (menuScene.classList.contains('p')){ // switched from play
            menuScene.classList.remove('p');
            menuScene.classList.remove('show');
            gameStatus = 0; // idle
        }
        else if (menuScene.classList.contains('f')){ // switched from fail menu
            generateLevel();
            menuScene.classList.remove('f');
            menuScene.classList.remove('show');
            gameStatus = 0;
        }
        else { // switched from finish screen or first open of game
            generateLevel();
            menuScene.classList.remove('w');
            menuScene.classList.remove('show');
            gameStatus = 0;
        }
        // cg
        
    });
    // Options button pressed
    document.getElementById('options-btn').addEventListener('click', function(){
        sound.play("uBtnPress");
        optionsContainer.classList.add('show');
    });
    // Sound button pressed
    document.getElementById('sound-btn').addEventListener('click', function(e){
        sound.play("uBtnPress");
        if (isSfxEnabled){
            e.target.innerText = 'Sound Off';
            isSfxEnabled = false;
            sound.volume(0);
        }
        else{
            e.target.innerText = 'Sound On';
            isSfxEnabled = true;
            sound.volume(1.0);
        }
        userData.sound = isSfxEnabled;
        saveUserData("sfx", isSfxEnabled);
    });
    // Reset button pressed in options
    document.getElementById('reset-btn').addEventListener('click', function(){
        sound.play("uBtnPress");
        confirmPopUp.classList.add('show');
    });
    confirmYesBtn.addEventListener('click', function(){
        sound.play("uBtnPress");
        resetUserData();
        confirmPopUp.classList.remove('show');
    });
    confirmNoBtn.addEventListener('click', function(){
        sound.play("uBtnPress");
        confirmPopUp.classList.remove('show');
    });

    // Options back button pressed
    document.getElementById('options-back-btn').addEventListener('click', function(){
        sound.play("uBtnPress");
        optionsContainer.classList.remove('show');
    });
    // Win scene next button
    document.getElementById('win-scene-next-btn').addEventListener('click', function(){
        sound.play('uBtnPress');
        transitionScene.classList.add('show');
        flagRevealBtn.classList.remove('disabled');
        setTimeout(() => {
            flagContainer.classList.remove('win');        
            winScene.classList.remove('show');
            generateLevel();
        }, 300);

        setTimeout(() => {
            transitionScene.classList.remove('show');
            gameStatus = 0;
            // cg
            
        }, 1000);
    });
    // Fail scene restart btn
    document.getElementById('restart-btn').addEventListener('click', function(){
        sound.play('uBtnPress');
        generateLevel();
        failScene.classList.remove('show');
        gameStatus = 0;
        // cg
        
    });
    // Fail scene menu btn
    document.getElementById('fail-scene-menu-btn').addEventListener('click', function(){
        sound.play('uBtnPress');
        menuScene.classList.add('f');
        menuScene.classList.add('show');
        failScene.classList.remove('show');
    });
    // Pass with ad button
    passWithAdBtn.addEventListener('click', function(){
        sound.play("uBtnPress");
        showRewardedAd();
    });
    // Finish scene menu button
    document.getElementById('finish-scene-menu-btn').addEventListener('click', function(){
        sound.play("uBtnPress");
        menuScene.classList.add('w');
        menuScene.classList.add('show');
        finishScene.classList.remove('show');
    });
    // Flag reveal button
    flagRevealBtn.addEventListener('click', function(e){
        if (flagRevealBtn.classList.contains('disabled')) return;
        sound.play("uBtnPress");
        flagRevealPopUp.classList.add('show');
        flagRevealBtn.classList.add('disabled');
        flagRevealTimeBar.style.width = '0%';
        setTimeout(() => {
            flagRevealPopUp.classList.remove('show');
            flagRevealTimeBar.style.width = '100%';
        }, 2000);
        setTimeout(() => {
            flagRevealBtn.classList.remove('disabled'); 
        }, 20000);
    });
}

function resetUserData(){
    currentLevel = 1;
    maxReachedLevel = 1;
    gameFinished = false;
    
    userData.currentLevel = currentLevel;
    userData.maxReachedLevel = maxReachedLevel;
    userData.gameFinished = gameFinished;

    saveUserData("maxReachedLevel", maxReachedLevel);
    saveUserData("gameFinished", false);

    // update game scene
    currentFlag = flags[currentLevel - 1];
    generateLevel(); 

}

function saveUserData(type, data){
    // cg
    
}

function loadUserData(){
    // cg
    

    // if first time opening game go with default settings
    if (isFirstTime == null){
        isFirstTime = true;
        return;
    }

    //maxReachedLevel = ;
    //isSfxEnabled = ;
    
    //gameFinished = ;

    currentLevel = maxReachedLevel;
    currentFlag  = flags[currentLevel - 1];
}

function loadAssets(){
    // sound
    sound = new Howl({
        src: ['./sound.mp3'],
        sprite: {
            fBtnConnect: [0, 400],
            uBtnPress: [610, 400],
            flagAssemble: [1240, 380],
            levelComplete: [1630, 530],
            levelFail: [2170, 220],
            pauseBtnPress: [2390, 330],
            sucess: [2720, 1617]
        }
    });

}


async function start(){
    loadAssets();
    // cg
    
    // cg
    
    loadUserData();
    addEventListeners();
    generateLevel();
    onWindowResize(); 
    
    gameloop.setUpdateCallback(update);
    gameloop.setDrawCallback(draw);
    gameloop.init();

    // cg
    
    
    if (isFirstTime) {
        tutorialElements.classList.add('show')
        console.log("first time add show to hand");
    };
}

// cg
const interstitialAdCallbacks = {
    adFinished: () => {
        console.log("Interstitial Ad Finished");
    },
    adError: (err) => {
        console.log("An error occured while playing interstitial ad", err);
    },
    adStarted: () => {
        console.log("Interstitial Ad Started");
    }
}

const rewardedAdCallbacks = {
    adFinished: () => {
        giveReward()
    },
    adError: (err) => {
        console.log("An error occured while playing rewarded ad", err);
    },
    adStarted: () => {
        console.log("Rewarded Ad Started");
    }
}


start();
