export function countRound(players,round) {
    //Get part
    var part = 0;
    switch (round.type) {
        case "petite":
            part = 10;
            break;
        case "pouce":
            part = 25;
            break;
        case "garde":
            part = 40;
            break;
        case "gardeSans":
            part = 100;
            break;
        case "gardeContre":
            part = 200;
            break;
        default:
            break;
    }

    //Add points
    part = part+round.points;

    //Check Petit au bout
    if(round.petitAuBout==='true') {
        part = part+10;
    }

    //Check if passed or not
    if(round.passed==='false') {
        part = -part;
    }

    //Update score
    const nrPlayers = players.length;
    if(nrPlayers!==5) {
        for(let i=0; i<nrPlayers; i++) {
            if(i===round.leader) {
                players[i].playerScore = players[i].playerScore + part*(nrPlayers-1); 
            }
            else {
                players[i].playerScore = players[i].playerScore -part;
            }
        }
    }
    else if(nrPlayers===5) {
        for(let i=0; i<nrPlayers;i++) {
            if(i===round.leader && i===round.second) {
                players[i].playerScore = players[i].playerScore + part*4;
            }
            else if(i===round.leader) {
                players[i].playerScore = players[i].playerScore + part*2;
            }
            else if(i===round.second) {
                players[i].playerScore = players[i].playerScore + part;
            }
            else {
                players[i].playerScore = players[i].playerScore - part;
            }
        }
    }

};

export function countMisere(miserePlayer,players) {
    for(var i=0; i<players.length; i++) {
        if(i===miserePlayer) {
            players[i].playerScore = players[i].playerScore+10*(players.length-1) 
        }
        else {
            players[i].playerScore = players[i].playerScore-10;
        }
    }
}