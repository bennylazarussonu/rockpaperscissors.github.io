function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer Choice: ",botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0}, 
        'paper': {'scissors': 0, 'rock': 1, 'paper':0.5}, 
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1},
    }

    var yourScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]){
    if (yourScore == 0){
        return {'message': 'You Lost!', 'color': 'red'};
    }
    else if(yourScore == 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = '<img src="' + imagesDatabase[humanImageChoice] + '" height=150 width=150 style="box-shadow: 0px 10px 50px rgba(37, 50, 233,1);">'
    messagediv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = '<img src="' + imagesDatabase[botImageChoice] + '" height=150 width=150 style="box-shadow: 0px 10px 50px rgba(243, 38, 24,1);">'

    document.getElementById("flex-box-rps-div").appendChild(humandiv);
    document.getElementById("flex-box-rps-div").appendChild(messagediv);
    document.getElementById("flex-box-rps-div").appendChild(botdiv);
}
