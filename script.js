var Game = {xp: 0, c: 10000000, drill: 10000000, launchCost: 1000000, oreValue: 1};
var Game2 = {xp: 0, c: 10000000, drill: 10000000, launchCost: 1000000, oreValue: 1};

$(document).ready(function() {
    $("#panel11").hide();
    $("#panel12").hide();
    $("#panel12").hide();
    $("#panel13").hide();
    
    $("#panel00").click(function() {
        $("#panel10").toggle();
    });
    $("#panel01").click(function() {
        $("#panel11").toggle();
    });
    $("#panel02").click(function() {
        $("#panel12").toggle();
    });
    $("#panel03").click(function() {
        $("#panel13").toggle();
    });
});

function sendMission() {
    if (Game.c >= Game.launchCost) {
        Game.c = Game.c - Game.launchCost;
        document.getElementById("launchButton").setAttribute("onclick","");
        document.getElementById("launch").src = "images/launch0.gif";
        document.getElementById("action").innerHTML = "LAUNCHING";
        
        setTimeout(function() {
            if (Math.random() * (Game.xp + 1) > 0.5) {
                document.getElementById("launch").src = "images/launch1b.gif";
                document.getElementById("action").innerHTML = "SUCCESS";
                Game.c = Game.c + 900000 + (Math.ceil(Math.random() * 1000000 * Game.oreValue));
                Game.xp = Game.xp + 1;
            } else {
                document.getElementById("launch").src = "images/launch1a.gif";
                document.getElementById("action").innerHTML = "FAILURE";
            }
        }, 3000);
        
        setTimeout(function() {
                document.getElementById("launchButton").setAttribute("onclick","sendMission()");
                document.getElementById("launch").src = "images/launch.gif";
                document.getElementById("action").innerHTML = "N/A";
        }, 6000);
    } else {
        document.getElementById("action").innerHTML = "NOT ENOUGH MONEY";
        
        setTimeout(function() {
                document.getElementById("action").innerHTML = "N/A";
        }, 3000);
    }
}

function drills() {
    Game.c = Game.c - Game.drill;
    Game.oreValue = Game.oreValue * 1.5;
    Game.launchCost = Game.launchCost * 1.1;
    Game.drill = Game.drill * 1.1;
}

function save() {
    localStorage.setItem("save", JSON.stringify(Game));
    localStorage.setItem("date", new Date());
}

function load() {
    Game = JSON.parse(localStorage.getItem("save"));
}

function reset() {
    Game = Game2;
}

function readme() {
    window.location = "https://github.com/thepixelguy/Skyminer/blob/master/README.md";
}

setInterval(function() {
    document.getElementById("xp").innerHTML = Game.xp;
    document.getElementById("credits").innerHTML = "¢" + Game.c.toLocaleString();
    document.getElementById("drill").innerHTML = Game.drill.toLocaleString();
    document.getElementById("multiplier").innerHTML = Game.oreValue.toLocaleString();
    document.getElementById("launchButton").innerHTML = "Send Mission to Asteroid (" + Game.launchCost.toLocaleString() + ")";
    document.getElementById("save").innerHTML = "PREVIOUS SAVE: " + localStorage.getItem("date");
    if (Game.c >= Game.drill) {
        document.getElementById("drills").style.display = "block";
    } else {
        document.getElementById("drills").style.display = "none";
    }
}, 0);