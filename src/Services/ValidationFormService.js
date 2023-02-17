/**
 * 
 * @param {Array} players 
 * @returns returns true if all the players' names are provided, false otherwise
 */
export function checkPlayersNames(players) {
    //Check if all the names are provided
    var validPLayerNames = true;
    for(let i=0; i<players.length; i++) {
        let currentPlayer = players[i];
        if(currentPlayer===null ||
            currentPlayer.playerName===null ||
            currentPlayer.playerName==="" || 
            !currentPlayer.playerName.trim()) {
            validPLayerNames = false;
            break;
        }
    }

    return validPLayerNames;
}

/**
 * 
 * @param {Object} round 
 * @param {Array} players
 * @returns returns true if the round is valid, false otherwise
 */
export function checkValidRound(round,players) {
    if(round.leader===null) {
        return false;
    }
    if(players.length===5 && round.second===null) {
        return false;
    }
    if(round.passed!=='true' && round.passed!=='false') {
        return false;
    }
    if(round.type===null) {
        return false;
    }
    if(round.points===null) {
        return false;
    }
    if(round.petitAuBout!=='true' && round.petitAuBout!=='false') {
        return false;
    }

    return true;
}

/**
 * 
 * @param {Number} miserePlayer 
 * @returns returns true if the miserePlayer is a valid player id, false otherwise
 */
export function checkValidMisere(miserePlayer) {
    if(miserePlayer==null) {
        return false;
    }

    return true;
}