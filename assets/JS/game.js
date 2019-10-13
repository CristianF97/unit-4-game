function newTarget() {
    targetNumber = Math.floor(Math.random() * 120 + 1);

    if (targetNumber > 120 || targetNumber < 32) {
        newTarget();
    }
}

let userScore = 0;
let wins = 0;
let losses = 0;

$("#targetNumber").text("Target number: " + targetNumber);

restart();

function assignValue() {
    rupeeOptions1 = Math.floor(Math.random() * 12 + 1);
    rupeeOptions2 = Math.floor(Math.random() * 12 + 1);
    rupeeOptions4 = Math.floor(Math.random() * 12 + 1);
    rupeeOptions4 = Math.floor(Math.random() * 12 + 1);



    let greenRupee = $("<img>");

    greenRupee.addClass("rupee-image");

    greenRupee.attr("src", "assets/images/greenrupee.png");

    greenRupee.attr("data-rupeevalue", rupeeOptions1);

    $("#Rupees").append(greenRupee);

    let blueRupee = $("<img>");

    blueRupee.addClass("rupee-image");

    blueRupee.attr("src", "assets/images/bluerupee.png");

    blueRupee.attr("data-rupeevalue", rupeeOptions2);

    $("#Rupees").append(blueRupee);

    let redrupee = $("<img>");

    redrupee.addClass("rupee-image");

    redrupee.attr("src", "assets/images/redrupee.png");

    redrupee.attr("data-rupeevalue", rupeeOptions4);

    $("#Rupees").append(redrupee);

    let goldRupee = $("<img>");

    goldRupee.addClass("rupee-image");

    goldRupee.attr("src", "assets/images/goldRupee.png");

    goldRupee.attr("data-rupeevalue", rupeeOptions4);

    $("#Rupees").append(goldRupee);

    $(".rupee-image").on("click", function () {

        let rupeeValues = ($(this).attr("data-rupeevalue"));

        rupeeValues = parseInt(rupeeValues);

        userScore += rupeeValues;
        $("#userScore").text("Your current score is: " + userScore);
        //
        if (userScore === targetNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            restart();


        } else if (userScore > targetNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            restart();

        }
    });
};


function restart() {
    $("#Rupees").text("");
    assignValue();
    newTarget();
    $("#targetNumber").text("Target number: " + targetNumber);
    userScore = 0;
    $("#userScore").text("Your current score is: " + userScore);

    if (rupeeOptions1 === rupeeOptions2 || rupeeOptions1 === rupeeOptions4 || rupeeOptions1 === rupeeOptions4) {
        restart();
    }

    if (rupeeOptions2 === rupeeOptions4 || rupeeOptions2 === rupeeOptions4) {
        restart();
    }

    if (rupeeOptions4 === rupeeOptions4) {
        restart();
    }
    console.log(rupeeOptions1);
    console.log(rupeeOptions2);
    console.log(rupeeOptions4);
    console.log(rupeeOptions4);
}


