var inquirer = require('inquirer');

var you = 70;
var zombie = 15;


function game() {
    if (you > 0 && zombie > 0) {

        inquirer
            .prompt([
                {
                    name: 'oneToFive',
                    type: 'list',
                    message: 'This traffic cone undead lookin freak is about to eat yo uglyass. Guess a number between [1 - 5] to fight this little sh*t:',
                    choices: [
                        { name: "1", value: 1 },
                        { name: "2", value: 2 },
                        { name: "3", value: 3 },
                        { name: "4", value: 4 },
                        { name: "5", value: 5 }
                    ]
                }
            ])
            .then(function (response) {
                var yRandNum = Math.ceil(Math.random() * 5);
                var zRandNum = Math.ceil(Math.random() * 5);

                if (response.oneToFive === zRandNum) {
                    zombie -= yRandNum;

                    console.log(
                        `\nGOT'EM! You just smacked the life outta the zombie for ${yRandNum} hit(s). \nYour health: ${you} \nZombie health: ${zombie} \n`
                    );
                    results();
                } else {
                    you -= zRandNum;

                    console.log(
                        `\nYou missed. The zombie took a bite outta yo crustyass for ${zRandNum} hit(s). \nYour health: ${you} \nZombie health: ${zombie} \n`
                    );
                    results();
                };
                game();
            })
    };
}

function results() {
    if (you > 0 && zombie <= 0) {
        console.log("===================================================================");
        console.log("          OH HE THOUGHT. Ya boi ain't gettin up. You won.          ");
        console.log("===================================================================");
    } else if (you <= 0 && zombie > 0) {
        console.log("===================================================================");
        console.log("               The zombie ate you. Game over, loser.               ");
        console.log("===================================================================");
    } else {
        return false;
    }
}

game();