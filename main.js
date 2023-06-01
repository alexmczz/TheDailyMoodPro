
//object template
const cur_mood =(mood, definition) =>{
    return{
        mood, //mood to be displayed
        definition //definition to be displayed under current mood
    }
}


//creating mood objects using object template above

let addled = cur_mood("addled 😖","Confused")
let aggravated = cur_mood("aggravated 😠","Incited especially deliberately")
let antisocial = cur_mood("antisocial 😐","Shunning the society of others")
let apathetic = cur_mood("apathetic 😶", "Feeling little or no emotion")
let astonished = cur_mood("astonished 😮","Filled with sudden wonder or amazement")
let borderline = cur_mood("borderline 😐","Bein in an intermediate state")
let bouncy = cur_mood("Bouncy 😄","Springy")
let cantankerous = cur_mood("cantankerous 😠", "Ill-tempered and quarrelsome")
let chill = cur_mood("chill 😌", "To relax")
let chipper = cur_mood("chipper 😀", "Feeling happy or lively")
let contemplative = cur_mood("contemplative 😊",  "Of or inclined to contemplation")
let copacetic = cur_mood("copacetic 🤷‍♂️", "Very satisfactory")
let cranky = cur_mood("cranky 😡", "Ill0tempered/ grouchy")
let crazed = cur_mood("crazed 🤪", "Driven insane, or as if insane")
let deprived = cur_mood("deprived 😢", "To remove or withhold something from the enjoyment or possession")
let dreamlike = cur_mood("dreamlike 😪", "surreal, or resembling a dream")
let emo = cur_mood("Emo 😞", "Essentially sad or emotional")
let fabulous = cur_mood("fabulous 🤩", "Barely believable; astonishing")
let focused = cur_mood("focused 🤨", "to bring into focus")
let fuzzy = cur_mood("fuzzy 😳", "too much soda on the weekends")
let giddy = cur_mood("giddy 😁","Frivolous and flighty")
let grumpy = cur_mood("grumpy 😠","in a bad mood")
let heroic = cur_mood("heroic 🤠","Very imposing or imporessive")
let hunky_dory = cur_mood("Hunky-dory 😌","Ok, perfectly alright")
let inspired = cur_mood("inspired 🤩", "Brilliantly creative")
let listless = cur_mood("listless 🥱", "Lacking energy or disinclined to exert effort")
let managerial = cur_mood("managerial 😎", "to manage or have characteristics of management")


//creating list of moods to interate through
const random_moods = [
    addled, aggravated, antisocial, apathetic, astonished,
    borderline, bouncy, cantankerous, chill, chipper, 
    contemplative, copacetic, cranky, crazed, deprived, 
    dreamlike, emo, fabulous, focused, fuzzy, giddy,
    grumpy, heroic, hunky_dory, inspired, listless, managerial
]



    //randomized mood
function moodRing(){
    let mooder = Math.ceil(Math.random()*random_moods.length -1)
    document.getElementById("myMood").innerHTML = random_moods[mooder].mood
}


//function called by clicking randomized button  or "Click here!"
document.getElementById("mood-ring").addEventListener("click", moodRing);


//relays which button is pushed via tying in click event to which ID

function handleClick(event) {
    var buttonId = event.target.id;
    selectedButtonId = random_moods.find(mood => mood.mood === event.target.dataset.mood); // Assign mood object to selectedButtonId variable
    console.log("Clicked button ID: " + buttonId);
    document.getElementById("myMood").innerHTML = buttonId
}

var buttons = document.querySelectorAll('.choices button');
buttons.forEach(function(button) {
    button.addEventListener('click', handleClick);
});
console.log(handleClick)





