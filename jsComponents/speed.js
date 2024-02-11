//Sets the speed of the creature based off of the {creatureType[0] and creatureType[1] and {modifiers[1]}}
function Speed(creatureType, abilityScores, idMoveSpeed, idFlySpeed, idSwimSpeed) {
    let speed0 = 0
    if (idMoveSpeed != 0 || idMoveSpeed != null) {
        speed0 = idMoveSpeed
    }
    //used for fly
    let speed1 = 0
    //used for swim
    let speed2 = 0
    if (creatureType[0] == `Beast`) {
        if (creatureType[1] == `Land`) {
            speed0 = Math.round((abilityScores[1] * 3) / 5) * 5
        } else if (creatureType[1] == `Air`) {
            speed0 = Math.round((abilityScores[1] * 2) / 5) * 5
            speed1 = Math.round((abilityScores[1] * 4) / 5) * 5
        } else if (creatureType[1] == `Water`) {
            speed2 = Math.round((abilityScores[1] * 3) / 5) * 5
        }
    }
    return [speed0, speed1, speed2]
}